// src/routes/v1.routes.js

import express from "express";

import authRoutes from "../modules/auth/auth.routes.js";
import adminRoutes from "../modules/admin/admin.routes.js"; // ✅ FIXED
import userRoutes from "../modules/user/user.routes.js";
import companyRoutes from "../modules/company/company.routes.js";
import productRoutes from "../modules/product/product.routes.js";
import orderRoutes from "../modules/order/order.routes.js";
import vendorRoutes from "../modules/vendor/vendor.routes.js";
import paymentRoutes from "../modules/payment/payment.routes.js";

const router = express.Router();

// AUTH
router.use("/auth", authRoutes);

// ADMIN
router.use("/admin", adminRoutes); // ✅ ADDED

// USER
router.use("/users", userRoutes);

// COMPANY
router.use("/companies", companyRoutes);

// PRODUCT
router.use("/products", productRoutes);

// ORDER
router.use("/orders", orderRoutes);

// VENDOR
router.use("/vendors", vendorRoutes);

// PAYMENT
router.use("/payments", paymentRoutes);

export default router;