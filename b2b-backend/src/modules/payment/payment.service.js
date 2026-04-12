import razorpay from "../../services/payment.service.js";
import crypto from "crypto";

import {
  createPayment,
  findByRazorpayOrderId,
} from "./payment.repository.js";

import Order from "../order/order.model.js";

export const createRazorpayOrder = async (orderId) => {
  const order = await Order.findById(orderId);

  if (!order) throw new Error("Order not found");

  const options = {
    amount: order.totalAmount * 100, // paise
    currency: "INR",
    receipt: order._id.toString(),
  };

  const razorpayOrder = await razorpay.orders.create(options);

  await createPayment({
    orderId,
    razorpayOrderId: razorpayOrder.id,
    amount: order.totalAmount,
  });

  return razorpayOrder;
};

export const verifyPayment = async (data) => {
  const {
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature,
  } = data;

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_SECRET)
    .update(body)
    .digest("hex");

  if (expectedSignature !== razorpay_signature) {
    throw new Error("Invalid payment signature");
  }

  const payment = await findByRazorpayOrderId(razorpay_order_id);

  if (!payment) throw new Error("Payment not found");

  payment.status = "SUCCESS";
  payment.razorpayPaymentId = razorpay_payment_id;
  payment.razorpaySignature = razorpay_signature;

  await payment.save();

  // update order
  await Order.findByIdAndUpdate(payment.orderId, {
    status: "PROCESSING",
  });

  return { message: "Payment verified successfully" };
};