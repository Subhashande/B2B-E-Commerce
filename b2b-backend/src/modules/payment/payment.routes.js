// src/modules/payment/payment.routes.js

import express from "express";

import {
  createOrder,
  verifyPayment,
} from "./payment.controller.js";

import { protect } from "../../middleware/auth.middleware.js";

const router = express.Router();

// Create Razorpay Order
router.post("/create-order", protect, createOrder);

// Verify Payment
router.post("/verify", protect, verifyPayment);

export default router;