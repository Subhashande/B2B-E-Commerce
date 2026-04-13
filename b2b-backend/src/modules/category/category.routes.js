// src/modules/category/category.routes.js

import express from "express";

import {
  createCategory,
  getCategories,
  getCategory,
  updateCategory,
  deleteCategory,
} from "./category.controller.js";

import { protect } from "../../middlewares/auth.middleware.js";
import { authorize } from "../../middlewares/role.middleware.js";
import { validate } from "../../middlewares/validate.middleware.js";

import {
  createCategorySchema,
  updateCategorySchema,
} from "./category.validation.js";

import { ROLES } from "../../constants/roles.js";

const router = express.Router();

// PUBLIC
router.get("/", getCategories);
router.get("/:id", getCategory);

// ADMIN
router.post(
  "/",
  protect,
  authorize(ROLES.ADMIN),
  validate(createCategorySchema),
  createCategory
);

router.put(
  "/:id",
  protect,
  authorize(ROLES.ADMIN),
  validate(updateCategorySchema),
  updateCategory
);

router.delete(
  "/:id",
  protect,
  authorize(ROLES.ADMIN),
  deleteCategory
);

export default router;