// modules/auth/auth.service.js

import {
  createCompany,
  createUser,
  findUserByEmail,
} from "./auth.repository.js";

import { hashPassword } from "../../utils/hashPassword.js";
import { comparePassword } from "../../utils/comparePassword.js";
import { generateToken } from "../../utils/generateToken.js";

import { USER_STATUS } from "../../constants/userStatus.js";
import AppError from "../../errors/AppError.js"; // ✅ added

export const registerUser = async (data) => {
  const { name, email, password, companyName, gst, address } = data;

  const existingUser = await findUserByEmail(email);

  // ✅ updated error handling
  if (existingUser) {
    throw new AppError("User already exists", 400);
  }

  const hashedPassword = await hashPassword(password);

  const company = await createCompany({
    name: companyName,
    gst,
    address,
  });

  await createUser({
    name,
    email,
    password: hashedPassword,
    companyId: company._id,
    status: USER_STATUS.PENDING,
  });

  return {
    message: "Registration successful. Await admin approval.",
  };
};

export const loginUser = async ({ email, password }) => {
  const user = await findUserByEmail(email);

  // ✅ consistent error messages (security best practice)
  if (!user) {
    throw new AppError("Invalid email or password", 401);
  }

  const isMatch = await comparePassword(password, user.password);

  if (!isMatch) {
    throw new AppError("Invalid email or password", 401);
  }

  if (user.status !== USER_STATUS.APPROVED) {
    throw new AppError("User not approved yet", 403);
  }

  const token = generateToken(user);

  return {
    message: "Login successful",
    token,
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
  };
};