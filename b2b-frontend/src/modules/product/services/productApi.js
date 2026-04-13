import apiClient from "../../../services/apiClient";

export const getProductsApi = () => {
  return apiClient.get("/products"); // 🔥 backend route
};