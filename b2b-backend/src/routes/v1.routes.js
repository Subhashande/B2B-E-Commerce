// src/routes/v1.routes.js

import express from "express";

// CORE MODULES
import authRoutes from "../modules/auth/auth.routes.js";
import adminRoutes from "../modules/admin/admin.routes.js";
import userRoutes from "../modules/user/user.routes.js";
import companyRoutes from "../modules/company/company.routes.js";

// BUSINESS MODULES
import productRoutes from "../modules/product/product.routes.js";
import orderRoutes from "../modules/order/order.routes.js";
import categoryRoutes from "../modules/category/category.routes.js";

// OPERATIONS
import paymentRoutes from "../modules/payment/payment.routes.js";
import vendorRoutes from "../modules/vendor/vendor.routes.js";
import logisticsRoutes from "../modules/logistics/logistics.routes.js";

// FINANCIAL
import creditRoutes from "../modules/credit/credit.routes.js";
import invoiceRoutes from "../modules/invoice/invoice.routes.js";

// ENGAGEMENT
import notificationRoutes from "../modules/notification/notification.routes.js";
import reviewRoutes from "../modules/review/review.routes.js";

// ANALYTICS
import analyticsRoutes from "../modules/analytics/analytics.routes.js";

const router = express.Router();

// ==========================
// AUTH & ADMIN
// ==========================
router.use("/auth", authRoutes);
router.use("/admin", adminRoutes);

// ==========================
// USER & COMPANY
// ==========================
router.use("/users", userRoutes);
router.use("/companies", companyRoutes);

// ==========================
// PRODUCT & CATEGORY
// ==========================
router.use("/products", productRoutes);
router.use("/categories", categoryRoutes);

// ==========================
// ORDER FLOW
// ==========================
router.use("/orders", orderRoutes);
router.use("/payments", paymentRoutes);
router.use("/vendors", vendorRoutes);
router.use("/logistics", logisticsRoutes);

// ==========================
// FINANCIAL SYSTEM
// ==========================
router.use("/credits", creditRoutes);
router.use("/invoices", invoiceRoutes);

// ==========================
// USER ENGAGEMENT
// ==========================
router.use("/notifications", notificationRoutes);
router.use("/reviews", reviewRoutes);

// ==========================
// ANALYTICS
// ==========================
router.use("/analytics", analyticsRoutes);

export default router;