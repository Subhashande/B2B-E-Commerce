// src/modules/product/product.utils.js

export const formatProduct = (product) => {
  return {
    id: product._id,
    name: product.name,
    price: product.price,
    stock: product.stock,
  };
};