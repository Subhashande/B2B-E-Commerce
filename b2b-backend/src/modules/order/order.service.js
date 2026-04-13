// src/modules/order/order.service.js

import {
  createOrder,
  getOrdersByUser,
  getAllOrders,
  getOrderById,
} from "./order.repository.js";

import Product from "../product/product.model.js";
import User from "../user/user.model.js";

import { ORDER_STATUS } from "../../constants/orderStatus.js";
import { USER_STATUS } from "../../constants/userStatus.js";

export const placeOrder = async (userId, data) => {
  const user = await User.findById(userId);

  if (!user) throw new Error("User not found");

  if (user.status !== USER_STATUS.APPROVED) {
    throw new Error("User not approved");
  }

  let totalAmount = 0;
  const items = [];

  for (const item of data.items) {
    const product = await Product.findById(item.productId);

    if (!product) throw new Error("Product not found");

    if (product.stock < item.quantity) {
      throw new Error("Insufficient stock");
    }

    // 🔥 STOCK DEDUCTION
    product.stock -= item.quantity;
    await product.save();

    const price = product.price;

    totalAmount += price * item.quantity;

    items.push({
      productId: product._id,
      quantity: item.quantity,
      price,
    });
  }

  const orderData = {
    userId,
    companyId: user.companyId,
    items,
    totalAmount,
    paymentType: data.paymentType || "ONLINE",
  };

  // 🔥 CREDIT SUPPORT
  if (orderData.paymentType === "CREDIT") {
    orderData.dueDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  }

  const order = await createOrder(orderData);

  return order;
};

export const fetchMyOrders = async (userId) => {
  return await getOrdersByUser(userId);
};

export const fetchAllOrders = async () => {
  return await getAllOrders();
};

export const fetchOrderById = async (id) => {
  const order = await getOrderById(id);

  if (!order) throw new Error("Order not found");

  return order;
};

// 🔥 ADMIN ACTIONS

export const updateOrderStatus = async (id, status) => {
  const order = await getOrderById(id);

  if (!order) throw new Error("Order not found");

  order.status = status;
  await order.save();

  return order;
};