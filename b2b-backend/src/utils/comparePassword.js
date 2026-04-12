// src/shared/utils/comparePassword.js

import bcrypt from "bcryptjs";

export const comparePassword = async (entered, stored) => {
  return await bcrypt.compare(entered, stored);
};