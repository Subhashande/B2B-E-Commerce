// src/modules/company/company.repository.js

import Company from "./company.model.js";

export const createCompany = (data) => Company.create(data);

export const getCompanies = () => Company.find();

export const getCompanyById = (id) => Company.findById(id);

export const updateCompany = (id, data) =>
  Company.findByIdAndUpdate(id, data, { new: true });