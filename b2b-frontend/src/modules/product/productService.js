import apiClient from "../../services/apiClient";

export const fetchAllProducts = async () => {
  const res = await apiClient.get("/products");

  // 🔥 FIX HERE
  if (Array.isArray(res.data)) return res.data;
  if (res.data.products) return res.data.products;
  if (res.data.data) return res.data.data;

  return [];
};

// export const fetchAllProducts = async () => {
//   return [
//     {
//       _id: "1",
//       name: "Laptop",
//       price: 50000,
//       description: "High performance laptop",
//       image: "https://via.placeholder.com/300",
//     },
//     {
//       _id: "2",
//       name: "Printer",
//       price: 15000,
//       description: "Office printer",
//       image: "https://via.placeholder.com/300",
//     },
//   ];
// };