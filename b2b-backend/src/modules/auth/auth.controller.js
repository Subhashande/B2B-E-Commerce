// modules/auth/auth.controller.js

import { catchAsync } from "../../errors/catchAsync.js";  
import * as authService from "./auth.service.js";

export const register = catchAsync(async (req, res) => {
  const result = await authService.registerUser(req.body);

  res.status(201).json({
    success: true,
    ...result,
  });
});

export const login = catchAsync(async (req, res) => {
  const result = await authService.loginUser(req.body);

  res.status(200).json({
    success: true,
    ...result,
  });
});