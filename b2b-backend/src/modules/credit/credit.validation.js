import Joi from "joi";

export const setCreditSchema = Joi.object({
  userId: Joi.string().required(),
  amount: Joi.number().required(),
});

export const repaySchema = Joi.object({
  amount: Joi.number().required(),
});