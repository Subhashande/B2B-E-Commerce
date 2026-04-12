import express from "express";

import {
  createOrder,
  getMyOrders,
  getAllOrders,
} from "./order.controller.js";

import { protect } from "../../middleware/auth.middleware.js";
import { authorize } from "../../middleware/role.middleware.js";
import { validate } from "../../middleware/validate.middleware.js";

import { createOrderSchema } from "./order.validation.js";

const router = express.Router();

// USER
router.post("/", protect, validate(createOrderSchema), createOrder);
router.get("/my", protect, getMyOrders);

// ADMIN
router.get("/", protect, authorize("ADMIN"), getAllOrders);

export default router;