// modules/auth/auth.repository.js
import * as userRepository from "../user/user.repository.js";

// Mock Company storage
const mockCompanies = [];

export const createCompany = async (data) => {
  const company = {
    _id: (mockCompanies.length + 1).toString(),
    ...data,
  };
  mockCompanies.push(company);
  return company;
};

export const createUser = async (data) => {
  const users = await userRepository.getUsers();
  const newUser = {
    _id: (users.length + 1).toString(),
    ...data,
    createdAt: new Date(),
  };
  users.push(newUser);
  return newUser;
};

export const findUserByEmail = async (email) => {
  const users = await userRepository.getUsers();
  return users.find((u) => u.email === email);
};