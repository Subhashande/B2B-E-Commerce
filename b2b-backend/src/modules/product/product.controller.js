// src/modules/product/product.controller.js

import * as productRepository from "./product.repository.js";

// ==========================
// CREATE PRODUCT (optional mock)
// ==========================
export const createProduct = async (req, res) => {
  const product = await productRepository.createProduct(req.body);
  res.status(201).json({
    success: true,
    product,
  });
};

// ==========================
// GET ALL PRODUCTS (MOCK)
// ==========================
export const getProducts = async (req, res) => {
  const products = await productRepository.getProducts();
  res.status(200).json({
    success: true,
    products,
  });
};

// ==========================
// GET SINGLE PRODUCT (MOCK)
// ==========================
export const getProduct = async (req, res) => {
  const { id } = req.params;
  const product = await productRepository.getProductById(id);

  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product not found",
    });
  }

  res.json({
    success: true,
    product,
  });
};