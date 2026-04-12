import {
  createProduct,
  getProducts,
  getProductById,
} from "./product.repository.js";

export const addProduct = async (data) => {
  return await createProduct(data);
};

export const fetchProducts = async (query) => {
  const { page = 1, limit = 10, search } = query;

  const filter = { isActive: true };

  if (search) {
    filter.name = { $regex: search, $options: "i" };
  }

  const skip = (page - 1) * limit;

  const products = await getProducts(filter, {
    skip,
    limit: Number(limit),
  });

  return products;
};

export const fetchProductById = async (id) => {
  const product = await getProductById(id);

  if (!product) throw new Error("Product not found");

  return product;
};