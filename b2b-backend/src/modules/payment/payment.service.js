// src/modules/payment/payment.service.js

import razorpay from "../../services/payment.service.js";
import crypto from "crypto";

import {
  createPayment,
  findByRazorpayOrderId,
} from "./payment.repository.js";

import * as orderRepository from "../order/order.repository.js";

import { PAYMENT_STATUS } from "../../constants/paymentStatus.js";
import { ORDER_STATUS } from "../../constants/orderStatus.js";

export const createRazorpayOrder = async (orderId) => {
  const order = await orderRepository.getOrderById(orderId);

  if (!order) throw new Error("Order not found");

  // MOCK FLOW IF RAZORPAY IS NOT INITIALIZED
  if (!razorpay) {
    console.log("Mocking Razorpay order creation for order:", orderId);
    const mockOrder = {
      id: "order_mock_" + Date.now(),
      amount: (order.totalAmount || 0) * 100,
      currency: "INR",
      receipt: order._id.toString(),
      status: "created"
    };

    await createPayment({
      orderId,
      razorpayOrderId: mockOrder.id,
      amount: order.totalAmount,
      status: PAYMENT_STATUS.PENDING,
    });

    return mockOrder;
  }

  const options = {
    amount: (order.totalAmount || 0) * 100,
    currency: "INR",
    receipt: order._id.toString(),
  };

  const razorpayOrder = await razorpay.orders.create(options);

  await createPayment({
    orderId,
    razorpayOrderId: razorpayOrder.id,
    amount: order.totalAmount,
    status: PAYMENT_STATUS.PENDING,
  });

  return razorpayOrder;
};

// 🔥 VERIFY PAYMENT

export const verifyPayment = async (data) => {
  const {
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature,
  } = data;

  // MOCK VERIFICATION IF RAZORPAY IS NOT INITIALIZED
  if (!razorpay) {
    console.log("Mocking Razorpay verification for order:", razorpay_order_id);
    const payment = await findByRazorpayOrderId(razorpay_order_id);
    if (!payment) throw new Error("Payment not found");

    payment.status = PAYMENT_STATUS.SUCCESS;
    payment.razorpayPaymentId = razorpay_payment_id || "pay_mock_" + Date.now();
    
    // Repository should handle save
    await payment.save?.(); 

    await orderRepository.updateOrder(payment.orderId, {
      status: ORDER_STATUS.PROCESSING,
      paymentStatus: PAYMENT_STATUS.SUCCESS,
    });

    return { message: "Mock Payment verified successfully" };
  }

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

  payment.status = PAYMENT_STATUS.SUCCESS;
  payment.razorpayPaymentId = razorpay_payment_id;
  payment.razorpaySignature = razorpay_signature;

  await payment.save?.();

  // 🔥 UPDATE ORDER STATUS
  await orderRepository.updateOrder(payment.orderId, {
    status: ORDER_STATUS.PROCESSING,
    paymentStatus: PAYMENT_STATUS.SUCCESS,
  });

  return { message: "Payment verified successfully" };
};