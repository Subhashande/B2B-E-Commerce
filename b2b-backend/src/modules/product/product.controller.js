import * as productService from "./product.service.js";

export const createProduct = async (req, res, next) => {
  try {
    const product = await productService.addProduct(req.body);

    res.status(201).json({
      success: true,
      product,
    });
  } catch (err) {
    next(err);
  }
};

export const getProducts = async (req, res, next) => {
  try {
    const products = await productService.fetchProducts(req.query);

    res.json({
      success: true,
      products,
    });
  } catch (err) {
    next(err);
  }
};

export const getProduct = async (req, res, next) => {
  try {
    const product = await productService.fetchProductById(req.params.id);

    res.json({
      success: true,
      product,
    });
  } catch (err) {
    next(err);
  }
};