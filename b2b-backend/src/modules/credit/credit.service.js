// src/modules/credit/credit.service.js

import {
  createCredit,
  findCreditByUser,
  updateCredit,
} from "./credit.repository.js";

import AppError from "../../errors/AppError.js";
import { CREDIT_STATUS } from "../../constants/creditStatus.js";

// ADMIN SET CREDIT
export const setCreditLimit = async (userId, amount) => {
  let credit = await findCreditByUser(userId);

  if (!credit) {
    credit = await createCredit({
      userId,
      limit: amount,
      used: 0,
      status: CREDIT_STATUS.ACTIVE,
    });
  } else {
    credit.limit = amount;
    // Keep used as is
  }

  return credit;
};

// GET CREDIT
export const getCreditDetails = async (userId) => {
  const credit = await findCreditByUser(userId);

  if (!credit) {
    // Return a default if not found
    return { limit: 0, used: 0 };
  }

  return credit;
};

// 🔥 VALIDATE CREDIT BEFORE ORDER
export const checkCreditEligibility = async (userId, amount) => {
  const credit = await findCreditByUser(userId);

  if (!credit) return false;

  const remaining = (credit.limit || 0) - (credit.used || 0);
  return remaining >= amount;
};

// 🔥 DEDUCT CREDIT
export const useCredit = async (userId, amount) => {
  const credit = await findCreditByUser(userId);
  if (credit) {
    credit.used = (credit.used || 0) + amount;
  }
};

// 🔥 REPAY CREDIT
export const repayCredit = async (userId, amount) => {
  const credit = await findCreditByUser(userId);
  if (credit) {
    credit.used = Math.max(0, (credit.used || 0) - amount);
  }
  return credit;
};