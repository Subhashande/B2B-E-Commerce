import apiClient from "./apiClient";

export const placeOrder = async (orderData) => {
  const res = await apiClient.post("/orders", orderData);
  return res.data;
};

export const fetchMyOrders = async () => {
  const res = await apiClient.get("/orders");
  return res.data.orders || [];
};

export const fetchOrderById = async (id) => {
  const res = await apiClient.get(`/orders/${id}`);
  return res.data.order;
};
