// src/modules/company/company.controller.js

import * as companyService from "./company.service.js";

export const createCompany = async (req, res, next) => {
  try {
    const company = await companyService.addCompany(req.body);

    res.status(201).json({
      success: true,
      company,
    });
  } catch (err) {
    next(err);
  }
};

export const getCompanies = async (req, res, next) => {
  try {
    const companies = await companyService.fetchCompanies();

    res.json({
      success: true,
      companies,
    });
  } catch (err) {
    next(err);
  }
};

export const getCompany = async (req, res, next) => {
  try {
    const company = await companyService.fetchCompanyById(
      req.params.id
    );

    res.json({
      success: true,
      company,
    });
  } catch (err) {
    next(err);
  }
};

export const updateCompany = async (req, res, next) => {
  try {
    const company = await companyService.editCompany(
      req.params.id,
      req.body
    );

    res.json({
      success: true,
      company,
    });
  } catch (err) {
    next(err);
  }
};