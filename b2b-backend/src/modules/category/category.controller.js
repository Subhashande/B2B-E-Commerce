// src/modules/category/category.controller.js

import * as categoryService from "./category.service.js";

export const createCategory = async (req, res, next) => {
  try {
    const result = await categoryService.addCategory(req.body);
    res.status(201).json({ success: true, data: result });
  } catch (err) {
    next(err);
  }
};

export const getCategories = async (req, res, next) => {
  try {
    const result = await categoryService.fetchCategories();
    res.json({ success: true, data: result });
  } catch (err) {
    next(err);
  }
};

export const getCategory = async (req, res, next) => {
  try {
    const result = await categoryService.fetchCategoryById(req.params.id);
    res.json({ success: true, data: result });
  } catch (err) {
    next(err);
  }
};

export const updateCategory = async (req, res, next) => {
  try {
    const result = await categoryService.editCategory(
      req.params.id,
      req.body
    );
    res.json({ success: true, data: result });
  } catch (err) {
    next(err);
  }
};

export const deleteCategory = async (req, res, next) => {
  try {
    const result = await categoryService.removeCategory(req.params.id);
    res.json({ success: true, data: result });
  } catch (err) {
    next(err);
  }
};