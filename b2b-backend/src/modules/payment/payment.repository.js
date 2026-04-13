// src/modules/payment/payment.repository.js

import Payment from "./payment.model.js";

export const createPayment = (data) => Payment.create(data);

export const findByRazorpayOrderId = (id) =>
  Payment.findOne({ razorpayOrderId: id });

export const updatePayment = (id, data) =>
  Payment.findByIdAndUpdate(id, data, { new: true });