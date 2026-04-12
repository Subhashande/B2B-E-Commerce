// src/middlewares/role.middleware.js

import { ROLES } from "../constants/roles.js"; // ✅ optional but good

export const authorize = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.user || !req.user.role) {
      return res.status(403).json({
        success: false,
        message: "Access denied",
      });
    }

    // ✅ optional safety check (prevents invalid roles)
    if (!Object.values(ROLES).includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: "Invalid role",
      });
    }

    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: "You are not allowed to access this resource",
      });
    }

    next();
  };
};