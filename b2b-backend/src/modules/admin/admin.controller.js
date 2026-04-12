// modules/admin/admin.controller.js

import * as adminService from "./admin.service.js";
import { catchAsync } from "../../utils/catchAsync.js";

export const getPendingUsers = catchAsync(async (req, res) => {
  const users = await adminService.fetchPendingUsers();

  res.status(200).json({
    success: true,
    users,
  });
});

export const approveUser = catchAsync(async (req, res) => {
  const user = await adminService.approveUser(req.params.userId);

  res.status(200).json({
    success: true,
    message: "User approved",
    user,
  });
});

export const rejectUser = catchAsync(async (req, res) => {
  const user = await adminService.rejectUser(req.params.userId);

  res.status(200).json({
    success: true,
    message: "User rejected",
    user,
  });
});