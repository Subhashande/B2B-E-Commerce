import apiClient from "../../services/apiClient";

export const fetchDashboardStats = async () => {
  const res = await apiClient.get("/admin/stats");
  return res.data;
};

export const fetchUsers = async () => {
  const res = await apiClient.get("/admin/users");
  if (Array.isArray(res.data)) return res.data;
  if (res.data.users) return res.data.users;
  if (res.data.data) return res.data.data;

  return [];
};