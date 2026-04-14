import express from "express";
import {
  createInvoice,
  getInvoices,
} from "./invoice.controller.js";

import { protect } from "../../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", protect, getInvoices);
router.post("/:orderId", protect, createInvoice);

export default router;