import express from "express";

import {
  createVendor,
  getVendors,
  assignVendor,
  updateStatus,
} from "./vendor.controller.js";

import { protect } from "../../middleware/auth.middleware.js";
import { authorize } from "../../middleware/role.middleware.js";
import { validate } from "../../middleware/validate.middleware.js";

import {
  createVendorSchema,
  assignVendorSchema,
} from "./vendor.validation.js";

const router = express.Router();

// ADMIN: create vendor
router.post(
  "/",
  protect,
  authorize("ADMIN"),
  validate(createVendorSchema),
  createVendor
);

// ADMIN: get vendors
router.get("/", protect, authorize("ADMIN"), getVendors);

// ADMIN: assign vendor to order
router.post(
  "/assign/:orderId",
  protect,
  authorize("ADMIN"),
  validate(assignVendorSchema),
  assignVendor
);

// ADMIN/VENDOR: update order status
router.patch(
  "/status/:orderId",
  protect,
  updateStatus
);

export default router;