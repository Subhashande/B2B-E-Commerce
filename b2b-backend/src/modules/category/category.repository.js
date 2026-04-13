// src/modules/category/category.repository.js

import Category from "./category.model.js";

export const createCategory = (data) => Category.create(data);

export const getAllCategories = () => Category.find();

export const getCategoryById = (id) => Category.findById(id);

export const updateCategory = (id, data) =>
  Category.findByIdAndUpdate(id, data, { new: true });

export const deleteCategory = (id) =>
  Category.findByIdAndDelete(id);