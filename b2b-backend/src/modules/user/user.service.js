// src/modules/user/user.service.js

import {
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "./user.repository.js";

export const fetchUsers = async () => {
  return await getUsers();
};

export const fetchUserById = async (id) => {
  const user = await getUserById(id);

  if (!user) throw new Error("User not found");

  return user;
};

export const editUser = async (id, data) => {
  const user = await updateUser(id, data);

  if (!user) throw new Error("User not found");

  return user;
};

export const removeUser = async (id) => {
  const user = await deleteUser(id);

  if (!user) throw new Error("User not found");

  return { message: "User deleted successfully" };
};