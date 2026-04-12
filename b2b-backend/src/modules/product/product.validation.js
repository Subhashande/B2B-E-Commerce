import Joi from "joi";

export const createProductSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().allow("", null),
  price: Joi.number().required(),
  stock: Joi.number().default(0),
  images: Joi.array().items(Joi.string()),
});