import { loginApi, registerApi } from "./authApi";

export const loginUser = async (data) => {
  const res = await loginApi(data);
  return res.data;
};

export const registerUser = async (data) => {
  const res = await registerApi(data);
  return res.data;
};