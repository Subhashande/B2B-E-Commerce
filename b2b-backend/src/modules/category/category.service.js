// src/modules/category/category.service.js

import {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
} from "./category.repository.js";

import AppError from "../../errors/AppError.js";

export const addCategory = async (data) => {
  return await createCategory(data);
};

export const fetchCategories = async () => {
  return await getAllCategories();
};

export const fetchCategoryById = async (id) => {
  const category = await getCategoryById(id);

  if (!category) {
    throw new AppError("Category not found", 404);
  }

  return category;
};

export const editCategory = async (id, data) => {
  const category = await updateCategory(id, data);

  if (!category) {
    throw new AppError("Category not found", 404);
  }

  return category;
};

export const removeCategory = async (id) => {
  const category = await deleteCategory(id);

  if (!category) {
    throw new AppError("Category not found", 404);
  }

  return { message: "Category deleted successfully" };
};