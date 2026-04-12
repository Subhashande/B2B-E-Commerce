import express from "express";

import {
  createProduct,
  getProducts,
  getProduct,
} from "./product.controller.js";

import { protect } from "../../middlewares/auth.middleware.js";
import { authorize } from "../../middlewares/role.middleware.js";
import { validate } from "../../middlewares/validate.middleware.js";
import { createProductSchema } from "./product.validation.js";

const router = express.Router();

// PUBLIC
router.get("/", getProducts);
router.get("/:id", getProduct);

// ADMIN ONLY
router.post(
  "/",
  protect,
  authorize("ADMIN"),
  validate(createProductSchema),
  createProduct
);

export default router;