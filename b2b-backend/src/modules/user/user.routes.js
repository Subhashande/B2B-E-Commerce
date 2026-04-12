// src/modules/user/user.routes.js

import express from "express";

import {
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} from "./user.controller.js";

import { protect } from "../../middlewares/auth.middleware.js";
import { authorize } from "../../middlewares/role.middleware.js";
import { validate } from "../../middlewares/validate.middleware.js";

import { updateUserSchema } from "./user.validation.js";
import { ROLES } from "../../constants/roles.js";

const router = express.Router();

router.get("/", protect, authorize(ROLES.ADMIN), getUsers);

router.get("/:id", protect, getUser);

router.patch(
  "/:id",
  protect,
  validate(updateUserSchema),
  updateUser
);

router.delete("/:id", protect, authorize(ROLES.ADMIN), deleteUser);

export default router;