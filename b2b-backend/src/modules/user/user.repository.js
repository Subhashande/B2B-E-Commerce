// modules/user/user.repository.js

import User from "./user.model.js";

export const getPendingUsers = () =>
  User.find({ status: "PENDING" }).populate("companyId");

export const updateUserStatus = (userId, status) =>
  User.findByIdAndUpdate(userId, { status }, { new: true });

export const findUserById = (id) =>
  User.findById(id).populate("companyId");