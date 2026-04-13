// src/modules/credit/credit.controller.js

import * as creditService from "./credit.service.js";

export const setCredit = async (req, res, next) => {
  try {
    const result = await creditService.setCreditLimit(
      req.body.userId,
      req.body.amount
    );
    res.json({ success: true, data: result });
  } catch (err) {
    next(err);
  }
};

export const getCredit = async (req, res, next) => {
  try {
    const result = await creditService.getCreditDetails(
      req.user.id
    );
    res.json({ success: true, data: result });
  } catch (err) {
    next(err);
  }
};

export const repay = async (req, res, next) => {
  try {
    const result = await creditService.repayCredit(
      req.user.id,
      req.body.amount
    );
    res.json({ success: true, data: result });
  } catch (err) {
    next(err);
  }
};