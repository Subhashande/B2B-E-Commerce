import express from "express";
import {
  createReview,
  getReviews,
} from "./review.controller.js";

import { protect } from "../../middleware/auth.middleware.js";

const router = express.Router();

router.post("/", protect, createReview);
router.get("/:productId", getReviews);

export default router;