// src/modules/vendor/vendor.service.js

import {
  createVendor,
  getVendors,
  getVendorById,
} from "./vendor.repository.js";

import Order from "../order/order.model.js";

import { ORDER_STATUS } from "../../constants/orderStatus.js";
import { VENDOR_STATUS } from "../../constants/vendorStatus.js";

// CREATE VENDOR
export const addVendor = async (data) => {
  return await createVendor(data);
};

// GET ALL
export const fetchVendors = async () => {
  return await getVendors();
};

// 🔥 SMART ASSIGNMENT
export const assignVendorToOrder = async (orderId) => {
  const order = await Order.findById(orderId);

  if (!order) throw new Error("Order not found");

  if (order.status !== ORDER_STATUS.PROCESSING) {
    throw new Error("Order not ready for assignment");
  }

  // 🔥 BEST VENDOR LOGIC
  const vendor = await getVendors().then(vendors =>
    vendors
      .filter(v => v.isAvailable && v.status === VENDOR_STATUS.ACTIVE)
      .sort((a, b) => b.capacity - a.capacity)[0]
  );

  if (!vendor) throw new Error("No available vendors");

  order.vendorId = vendor._id;
  order.status = ORDER_STATUS.ASSIGNED;

  await order.save();

  return order;
};

// 🔥 ADMIN MANUAL ASSIGN
export const manualAssignVendor = async (orderId, vendorId) => {
  const order = await Order.findById(orderId);

  if (!order) throw new Error("Order not found");

  const vendor = await getVendorById(vendorId);

  if (!vendor) throw new Error("Vendor not found");

  order.vendorId = vendorId;
  order.status = ORDER_STATUS.ASSIGNED;

  await order.save();

  return order;
};

// 🔥 UPDATE DELIVERY STATUS
export const updateOrderStatus = async (orderId, status) => {
  const order = await Order.findById(orderId);

  if (!order) throw new Error("Order not found");

  order.status = status;

  await order.save();

  return order;
};