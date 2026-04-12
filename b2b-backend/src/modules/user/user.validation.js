// src/modules/user/user.validation.js

import Joi from "joi";

export const updateUserSchema = Joi.object({
  name: Joi.string(),
  role: Joi.string(),
  status: Joi.string(),
});