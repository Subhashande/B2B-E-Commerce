// src/modules/credit/credit.routes.js

import express from "express";

import {
  setCredit,
  getCredit,
  repay,
} from "./credit.controller.js";

import { protect } from "../../middlewares/auth.middleware.js";
import { authorize } from "../../middlewares/role.middleware.js";
import { ROLES } from "../../constants/roles.js";

const router = express.Router();

// ADMIN SET CREDIT
router.post("/", protect, authorize(ROLES.ADMIN), setCredit);

// USER VIEW CREDIT
router.get("/", protect, getCredit);

// USER REPAY
router.post("/repay", protect, repay);

export default router;