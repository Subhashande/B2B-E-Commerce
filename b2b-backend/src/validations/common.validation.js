// src/validations/common.validation.js

import Joi from "joi";

export const objectId = Joi.string().hex().length(24);

export const paginationSchema = Joi.object({
  page: Joi.number().min(1),
  limit: Joi.number().min(1),
});

export const idParamSchema = Joi.object({
  id: objectId.required(),
});