import Joi from "joi";

export const createVendorSchema = Joi.object({
  name: Joi.string().required(),
  location: Joi.string().required(),
  capacity: Joi.number().min(0),
});

export const assignVendorSchema = Joi.object({
  vendorId: Joi.string().required(),
});