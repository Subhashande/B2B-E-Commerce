// src/modules/company/company.validation.js

import Joi from "joi";

export const createCompanySchema = Joi.object({
  name: Joi.string().required(),
  gst: Joi.string().allow("", null),
  address: Joi.string().required(),
});