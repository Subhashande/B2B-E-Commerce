// src/modules/analytics/analytics.routes.js

import express from "express";
import {
  getStats,
  getSales,
} from "./analytics.controller.js";

import { protect } from "../../middlewares/auth.middleware.js";
import { authorize } from "../../middlewares/role.middleware.js";
import { ROLES } from "../../constants/roles.js";

const router = express.Router();

// ADMIN ONLY
router.get("/stats", protect, authorize(ROLES.ADMIN), getStats);
router.get("/sales", protect, authorize(ROLES.ADMIN), getSales);

export default router;