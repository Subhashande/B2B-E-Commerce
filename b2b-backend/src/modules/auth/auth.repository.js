// modules/auth/auth.repository.js

import User from "../user/user.model.js";
import Company from "../company/company.model.js";

export const createCompany = (data) => Company.create(data);

export const createUser = (data) => User.create(data);

export const findUserByEmail = (email) =>
  User.findOne({ email }).populate("companyId");