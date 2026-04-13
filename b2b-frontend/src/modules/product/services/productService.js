import { getProductsApi } from "./productApi";

export const getProducts = async () => {
  const res = await getProductsApi();
  // ✅ Normalize to return ONLY array as per rule
  return res.data.products || [];
};