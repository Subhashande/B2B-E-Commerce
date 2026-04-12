// src/modules/user/user.controller.js

import * as userService from "./user.service.js";

export const getUsers = async (req, res, next) => {
  try {
    const users = await userService.fetchUsers();

    res.json({
      success: true,
      users,
    });
  } catch (err) {
    next(err);
  }
};

export const getUser = async (req, res, next) => {
  try {
    const user = await userService.fetchUserById(
      req.params.id
    );

    res.json({
      success: true,
      user,
    });
  } catch (err) {
    next(err);
  }
};

export const updateUser = async (req, res, next) => {
  try {
    const user = await userService.editUser(
      req.params.id,
      req.body
    );

    res.json({
      success: true,
      user,
    });
  } catch (err) {
    next(err);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const result = await userService.removeUser(
      req.params.id
    );

    res.json({
      success: true,
      ...result,
    });
  } catch (err) {
    next(err);
  }
};