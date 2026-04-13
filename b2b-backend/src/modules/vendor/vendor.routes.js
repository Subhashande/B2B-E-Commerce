// src/modules/vendor/vendor.routes.js

import express from "express";

import {
  createVendor,
  getVendors,
  assignVendor,
  manualAssign,
  updateStatus,
} from "./vendor.controller.js";

import { protect } from "../../middlewares/auth.middleware.js";
import { authorize } from "../../middlewares/role.middleware.js";

import { ROLES } from "../../constants/roles.js";

const router = express.Router();

// CREATE VENDOR (ADMIN)
router.post("/", protect, authorize(ROLES.ADMIN), createVendor);

// GET ALL
router.get("/", protect, getVendors);

// AUTO ASSIGN
router.post(
  "/assign/:orderId",
  protect,
  authorize(ROLES.ADMIN),
  assignVendor
);

// MANUAL ASSIGN
router.post(
  "/manual-assign/:orderId",
  protect,
  authorize(ROLES.ADMIN),
  manualAssign
);

// UPDATE DELIVERY STATUS
router.put("/status/:orderId", protect, updateStatus);

export default router;