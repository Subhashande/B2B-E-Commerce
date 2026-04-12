import {
  createVendor,
  getVendors,
  getVendorById,
} from "./vendor.repository.js";

import Order from "../order/order.model.js";

import { ORDER_STATUS } from "../../constants/orderStatus.js"; // ✅ added

export const addVendor = async (data) => {
  return await createVendor(data);
};

export const fetchVendors = async () => {
  return await getVendors();
};

export const assignVendorToOrder = async (orderId, vendorId) => {
  const order = await Order.findById(orderId);

  if (!order) throw new Error("Order not found");

  if (order.status !== ORDER_STATUS.PROCESSING) { // ✅ replaced
    throw new Error("Order not ready for vendor assignment");
  }

  const vendor = await getVendorById(vendorId);

  if (!vendor) throw new Error("Vendor not found");

  if (!vendor.isAvailable) {
    throw new Error("Vendor not available");
  }

  order.status = ORDER_STATUS.ASSIGNED; // ✅ replaced
  order.vendorId = vendorId;

  await order.save();

  return order;
};

export const updateOrderStatus = async (orderId, status) => {
  const order = await Order.findById(orderId);

  if (!order) throw new Error("Order not found");

  order.status = status;

  await order.save();

  return order;
};