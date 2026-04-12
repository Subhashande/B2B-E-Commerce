import apiClient from "../../services/apiClient";

export const loginApi = (data) => apiClient.post("/auth/login", data);
export const registerApi = (data) => apiClient.post("/auth/register", data);