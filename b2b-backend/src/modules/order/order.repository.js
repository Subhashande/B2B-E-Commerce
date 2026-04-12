import Order from "./order.model.js";

export const createOrder = (data) => Order.create(data);

export const getOrdersByUser = (userId) =>
  Order.find({ userId }).populate("items.productId");

export const getAllOrders = () =>
  Order.find().populate("userId").populate("items.productId");

export const getOrderById = (id) =>
  Order.findById(id).populate("items.productId");