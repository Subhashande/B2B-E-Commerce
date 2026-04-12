// src/modules/company/company.service.js

import {
  createCompany,
  getCompanies,
  getCompanyById,
  updateCompany,
} from "./company.repository.js";

export const addCompany = async (data) => {
  return await createCompany(data);
};

export const fetchCompanies = async () => {
  return await getCompanies();
};

export const fetchCompanyById = async (id) => {
  const company = await getCompanyById(id);

  if (!company) throw new Error("Company not found");

  return company;
};

export const editCompany = async (id, data) => {
  const company = await updateCompany(id, data);

  if (!company) throw new Error("Company not found");

  return company;
};