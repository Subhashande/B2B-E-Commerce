// src/modules/notification/notification.routes.js

import express from "express";

import {
  getNotifications,
  markRead,
} from "./notification.controller.js";

import { protect } from "../../middleware/auth.middleware.js";

const router = express.Router();

// GET USER NOTIFICATIONS
router.get("/", protect, getNotifications);

// MARK AS READ
router.put("/:id", protect, markRead);

export default router;