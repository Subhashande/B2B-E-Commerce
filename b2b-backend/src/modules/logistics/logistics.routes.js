import express from "express";
import {
  createTracking,
  updateTracking,
  getLogistics,
} from "./logistics.controller.js";

import { protect } from "../../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", protect, getLogistics);
router.post("/", protect, createTracking);
router.put("/:orderId", protect, updateTracking);

export default router;