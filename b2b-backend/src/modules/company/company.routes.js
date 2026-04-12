// src/modules/company/company.routes.js

import express from "express";

import {
  createCompany,
  getCompanies,
  getCompany,
  updateCompany,
} from "./company.controller.js";

import { protect } from "../../middlewares/auth.middleware.js";
import { authorize } from "../../middlewares/role.middleware.js";
import { validate } from "../../middlewares/validate.middleware.js";

import { createCompanySchema } from "./company.validation.js";
import { ROLES } from "../../constants/roles.js";

const router = express.Router();

router.post(
  "/",
  protect,
  authorize(ROLES.ADMIN),
  validate(createCompanySchema),
  createCompany
);

router.get("/", protect, authorize(ROLES.ADMIN), getCompanies);

router.get("/:id", protect, getCompany);

router.patch("/:id", protect, updateCompany);

export default router;