import Joi from "joi";

export const generateInvoiceSchema = Joi.object({
  orderId: Joi.string().required(),
});