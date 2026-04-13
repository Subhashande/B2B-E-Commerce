import apiClient from "../../services/apiClient";

export const fetchAllProducts = async () => {
  const res = await apiClient.get("/products");

  // ✅ ALWAYS return array
  return res.data.products || [];
};