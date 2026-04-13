import express from "express";
import {
  createReview,
  getReviews,
} from "./review.controller.js";

import { protect } from "../../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/", protect, createReview);
router.get("/:productId", getReviews);

export default router;