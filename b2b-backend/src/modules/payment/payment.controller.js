// src/modules/payment/payment.controller.js

import * as paymentService from "./payment.service.js";

export const createOrder = async (req, res, next) => {
  try {
    const result = await paymentService.createRazorpayOrder(
      req.body.orderId
    );
    res.json({ success: true, data: result });
  } catch (err) {
    next(err);
  }
};

export const verifyPayment = async (req, res, next) => {
  try {
    const result = await paymentService.verifyPayment(req.body);
    res.json({ success: true, data: result });
  } catch (err) {
    next(err);
  }
};