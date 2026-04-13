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
      creditLimit: amount,
      availableCredit: amount,
    });
  } else {
    credit.creditLimit = amount;
    credit.availableCredit = amount - credit.usedCredit;
    await credit.save();
  }

  return credit;
};

// GET CREDIT
export const getCreditDetails = async (userId) => {
  const credit = await findCreditByUser(userId);

  if (!credit) throw new AppError("Credit not found", 404);

  return credit;
};

// 🔥 VALIDATE CREDIT BEFORE ORDER
export const checkCreditEligibility = async (userId, amount) => {
  const credit = await findCreditByUser(userId);

  if (!credit) throw new AppError("No credit account", 400);

  if (credit.status !== CREDIT_STATUS.ACTIVE) {
    throw new AppError("Credit account not active", 403);
  }

  if (credit.availableCredit < amount) {
    throw new AppError("Insufficient credit", 400);
  }

  return true;
};

// 🔥 DEDUCT CREDIT
export const useCredit = async (userId, amount) => {
  const credit = await findCreditByUser(userId);

  credit.usedCredit += amount;
  credit.availableCredit -= amount;

  await credit.save();
};

// 🔥 REPAY CREDIT
export const repayCredit = async (userId, amount) => {
  const credit = await findCreditByUser(userId);

  credit.usedCredit -= amount;
  credit.availableCredit += amount;

  if (credit.usedCredit < 0) credit.usedCredit = 0;

  await credit.save();

  return credit;
};