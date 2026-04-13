import Joi from "joi";

export const createProductSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().allow("", null),
  price: Joi.number().min(1).required(),
  stock: Joi.number().min(0).default(0),
  images: Joi.array().items(Joi.string().uri()),
});