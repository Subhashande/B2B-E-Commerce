// src/modules/product/product.routes.js

import express from "express";

import {
  createProduct,
  getProducts,
  getProduct,
} from "./product.controller.js";

import { protect } from "../../middlewares/auth.middleware.js";
import { authorize } from "../../middlewares/role.middleware.js";
import { validate } from "../../middlewares/validate.middleware.js";
import { upload } from "../../middlewares/upload.middleware.js"; // ✅ added

import { createProductSchema } from "./product.validation.js";
import { ROLES } from "../../constants/roles.js";

const router = express.Router();


// ==========================
// PUBLIC ROUTES
// ==========================
router.get("/", getProducts);
router.get("/:id", getProduct);


// ==========================
// ADMIN ROUTES
// ==========================

// Create product
router.post(
  "/",
  protect,
  authorize(ROLES.ADMIN),
  validate(createProductSchema),
  createProduct
);

// Upload product image
router.post(
  "/upload",
  protect,
  authorize(ROLES.ADMIN), // 🔥 restrict to admin
  upload.single("file"),
  (req, res) => {
    res.status(200).json({
      success: true,
      message: "File uploaded successfully",
      file: req.file,
    });
  }
);

export default router;