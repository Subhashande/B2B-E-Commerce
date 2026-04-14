import apiClient from "../../services/apiClient";

export const fetchDashboardStats = async () => {
  const res = await apiClient.get("/analytics/stats");
  return res.data.data || res.data;
};

export const fetchUsers = async () => {
  const res = await apiClient.get("/admin/users");
  return res.data.users || res.data || [];
};

export const fetchAdminProducts = async () => {
  const res = await apiClient.get("/products");
  return res.data.products || [];
};

export const fetchAdminOrders = async () => {
  const res = await apiClient.get("/orders");
  return res.data.orders || [];
};

export const deleteProduct = async (id) => {
  await apiClient.delete(`/products/${id}`);
};

export const updateOrderStatus = async (id, status) => {
  await apiClient.patch(`/orders/${id}/status`, { status });
};

export const approveUserApi = async (userId) => {
  const res = await apiClient.patch(`/admin/users/${userId}/approve`);
  return res.data;
};

export const rejectUserApi = async (userId) => {
  const res = await apiClient.patch(`/admin/users/${userId}/reject`);
  return res.data;
};