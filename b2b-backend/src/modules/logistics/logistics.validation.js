import Joi from "joi";

export const createLogisticsSchema = Joi.object({
  orderId: Joi.string().required(),
  vendorId: Joi.string().required(),
});

export const updateLogisticsSchema = Joi.object({
  status: Joi.string().required(),
});