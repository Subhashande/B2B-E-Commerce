// modules/auth/auth.service.js

import * as userRepository from "../user/user.repository.js";
import jwt from "jsonwebtoken";
import AppError from "../../errors/AppError.js";

const generateToken = (id, role) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

export const registerUser = async (data) => {
  const { name, email, password } = data;

  const users = await userRepository.getUsers();
  const existingUser = users.find((u) => u.email === email);

  if (existingUser) {
    throw new AppError("Email already registered", 400);
  }

  // ✅ MOCK REGISTRATION
  const newUser = {
    _id: (users.length + 1).toString(),
    name,
    email,
    password, // In real apps, we hash this
    role: "USER",
    status: "PENDING",
    createdAt: new Date(),
  };

  users.push(newUser);

  return {
    success: true,
    message: "Registration successful",
    user: {
      id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
      status: newUser.status,
    },
  };
};

export const loginUser = async (data) => {
  if (!data) {
    throw new AppError("Request body is missing", 400);
  }

  const { email, password } = data;

  if (!email || !password) {
    throw new AppError("Email and password are required", 400);
  }

  // ✅ PERMISSIVE MOCK LOGIN
  // If email contains "admin", log in as ADMIN, else as USER
  const isInternalAdmin = email.toLowerCase().includes("admin");
  const userId = isInternalAdmin ? "1" : "2";
  const userRole = isInternalAdmin ? "ADMIN" : "USER";

  const token = generateToken(userId, userRole);
  
  return {
    success: true,
    message: "Login successful",
    token,
    user: {
      id: userId,
      name: isInternalAdmin ? "Admin" : "Subhash",
      email: email,
      role: userRole,
      status: "APPROVED", // Auto-approve for this permissive mode
    },
  };
};