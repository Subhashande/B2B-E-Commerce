import express from "express";
import {
  createTracking,
  updateTracking,
} from "./logistics.controller.js";

import { protect } from "../../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/", protect, createTracking);
router.put("/:orderId", protect, updateTracking);

export default router;