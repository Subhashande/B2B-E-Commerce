// modules/admin/admin.routes.js

import express from "express";
import {
  getPendingUsers,
  approveUser,
  rejectUser,
  getStats,
  getAllUsers,
} from "./admin.controller.js";

import { protect } from "../../middleware/auth.middleware.js";
import { authorize } from "../../middleware/role.middleware.js";

const router = express.Router();

// Stats
router.get("/stats", getStats);

// All users
router.get("/users", getAllUsers);

/**
 * 🔐 Apply global middleware for admin routes
 * - Authentication required
 * - Only ADMIN role allowed
 */
router.use(protect);
router.use(authorize("ADMIN"));

/**
 * 👤 USER APPROVAL MANAGEMENT
 */

// Get all pending users
router.get("/users/pending", getPendingUsers);

// Approve a user
router.patch("/users/:userId/approve", approveUser);

// Reject a user
router.patch("/users/:userId/reject", rejectUser);

export default router;