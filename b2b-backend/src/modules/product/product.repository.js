import Product from "./product.model.js";

export const createProduct = (data) => Product.create(data);

export const getProducts = (filter, options) =>
  Product.find(filter)
    .skip(options.skip)
    .limit(options.limit)
    .sort({ createdAt: -1 });

export const getProductById = (id) => Product.findById(id);