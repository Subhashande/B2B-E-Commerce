// modules/admin/admin.service.js

import {
  getPendingUsers,
  updateUserStatus,
  findUserById,
} from "./admin.repository.js";

import { USER_STATUS } from "../../constants/userStatus.js";

export const fetchPendingUsers = async () => {
  return await getPendingUsers();
};

export const approveUser = async (userId) => {
  const user = await findUserById(userId);

  if (!user) throw new Error("User not found");

  if (user.status !== USER_STATUS.PENDING) {
    throw new Error("User already processed");
  }

  return await updateUserStatus(userId, USER_STATUS.APPROVED);
};

export const rejectUser = async (userId) => {
  const user = await findUserById(userId);

  if (!user) throw new Error("User not found");

  if (user.status !== USER_STATUS.PENDING) {
    throw new Error("User already processed");
  }

  return await updateUserStatus(userId, USER_STATUS.REJECTED);
};