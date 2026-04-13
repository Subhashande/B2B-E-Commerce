// modules/admin/admin.controller.js

import * as adminService from "./admin.service.js";
import { catchAsync } from "../../utils/catchAsync.js";
import * as userRepository from "../user/user.repository.js";
import * as productRepository from "../product/product.repository.js";
import * as orderRepository from "../order/order.repository.js";

export const getStats = catchAsync(async (req, res) => {
  const users = await userRepository.getUsers();
  const products = await productRepository.getProducts();
  const orders = await orderRepository.getAllOrders();

  res.status(200).json({
    success: true,
    stats: {
      totalUsers: users.length,
      totalProducts: products.length,
      totalOrders: orders.length,
      revenue: orders.reduce((sum, order) => sum + order.totalAmount, 0),
    },
  });
});

export const getAllUsers = catchAsync(async (req, res) => {
  const users = await userRepository.getUsers();
  res.status(200).json({
    success: true,
    users,
  });
});

export const getPendingUsers = catchAsync(async (req, res) => {
  const users = await adminService.fetchPendingUsers();

  res.status(200).json({
    success: true,
    users,
  });
});

export const approveUser = catchAsync(async (req, res) => {
  const user = await adminService.approveUser(req.params.userId);

  res.status(200).json({
    success: true,
    message: "User approved",
    user,
  });
});

export const rejectUser = catchAsync(async (req, res) => {
  const user = await adminService.rejectUser(req.params.userId);

  res.status(200).json({
    success: true,
    message: "User rejected",
    user,
  });
});