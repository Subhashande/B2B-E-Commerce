// src/modules/user/user.repository.js

import User from "./user.model.js";

export const getUsers = () => User.find().populate("companyId");

export const getUserById = (id) =>
  User.findById(id).populate("companyId");

export const updateUser = (id, data) =>
  User.findByIdAndUpdate(id, data, { new: true });

export const deleteUser = (id) =>
  User.findByIdAndDelete(id);