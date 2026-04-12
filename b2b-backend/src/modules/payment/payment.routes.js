import express from "express";

import {
  createOrder,
  verifyPayment,
} from "./payment.controller.js";

import { protect } from "../../middleware/auth.middleware.js";

const router = express.Router();

router.post("/create/:orderId", protect, createOrder);
router.post("/verify", protect, verifyPayment);

export default router;