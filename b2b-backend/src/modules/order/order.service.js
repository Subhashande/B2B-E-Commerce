// src/modules/order/order.service.js

import {
  createOrder,
  getOrdersByUser,
  getAllOrders,
  getOrderById,
} from "./order.repository.js";

import * as productRepository from "../product/product.repository.js";
import * as userRepository from "../user/user.repository.js";
import * as creditService from "../credit/credit.service.js";

import { ORDER_STATUS } from "../../constants/orderStatus.js";
import { USER_STATUS } from "../../constants/userStatus.js";

export const placeOrder = async (userId, data) => {
  const user = await userRepository.getUserById(userId);

  if (!user) throw new Error("User not found");

  if (user.status !== USER_STATUS.APPROVED) {
    throw new Error("User not approved");
  }

  let totalAmount = 0;
  const items = [];

  for (const item of data.items) {
    const product = await productRepository.getProductById(item.productId);

    if (!product) throw new Error("Product not found");

    if (product.stock < item.quantity) {
      throw new Error("Insufficient stock");
    }

    // 🔥 STOCK DEDUCTION
    await productRepository.updateProduct(product._id, {
      stock: product.stock - item.quantity,
    });

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
    companyId: user.companyId || "mock_company_id",
    items,
    totalAmount,
    paymentType: data.paymentType || "ONLINE",
    status: data.paymentType === "CREDIT" ? ORDER_STATUS.PROCESSING : ORDER_STATUS.PENDING,
  };

  // 🔥 CREDIT SUPPORT
  if (orderData.paymentType === "CREDIT") {
    const isEligible = await creditService.checkCreditEligibility(userId, totalAmount);
    if (!isEligible) throw new Error("Insufficient credit limit");
    
    await creditService.useCredit(userId, totalAmount);
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
  // Mock repository update
  return order;
};