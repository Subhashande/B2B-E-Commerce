// src/modules/notification/notification.validation.js

import Joi from "joi";

export const createNotificationSchema = Joi.object({
  userId: Joi.string().required(),
  type: Joi.string().required(),
  message: Joi.string().required(),
});

export const markReadSchema = Joi.object({
  id: Joi.string().required(),
});