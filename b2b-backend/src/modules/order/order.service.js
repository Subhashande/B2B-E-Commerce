import {
  createOrder,
  getOrdersByUser,
  getAllOrders,
  getOrderById,
} from "./order.repository.js";

import * as productRepository from "../product/product.repository.js";
import * as userRepository from "../user/user.repository.js";

import { USER_STATUS } from "../../constants/userStatus.js";
import { ORDER_STATUS } from "../../constants/orderStatus.js";
import AppError from "../../errors/AppError.js";

export const placeOrder = async (userId, data) => {
  const user = await userRepository.getUserById(userId);

  if (!user) throw new Error("User not found");

  // ✅ CHECK APPROVAL STATUS
  if (user.status !== USER_STATUS.APPROVED && user.role !== "ADMIN") {
    throw new AppError("Waiting for admin approval to place orders", 403);
  }

  let totalAmount = 0;
  const items = [];

  for (const item of data.items) {
    const product = await productRepository.getProductById(item.productId || item._id);

    if (!product) throw new Error("Product not found");

    if (product.stock < item.quantity) {
      throw new Error("Insufficient stock");
    }

    const price = product.price;

    totalAmount += price * item.quantity;

    items.push({
      productId: product._id,
      quantity: item.quantity,
      price,
    });
  }

  const order = await createOrder({
    userId,
    companyId: user.companyId,
    items,
    totalAmount,
    status: ORDER_STATUS.PENDING,
  });

  return order;
};

export const fetchMyOrders = async (userId) => {
  return await getOrdersByUser(userId);
};

export const fetchAllOrders = async () => {
  return await getAllOrders();
};

export const updateStatus = async (id, status) => {
  const order = await updateOrderStatus(id, status);
  if (!order) throw new Error("Order not found");
  return order;
};

export const fetchOrderById = async (id) => {
  const order = await getOrderById(id);

  if (!order) throw new Error("Order not found");

  return order;
};