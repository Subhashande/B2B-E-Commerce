// src/modules/credit/credit.repository.js

import Credit from "./credit.model.js";

export const createCredit = (data) => Credit.create(data);

export const findCreditByUser = (userId) =>
  Credit.findOne({ userId });

export const updateCredit = (id, data) =>
  Credit.findByIdAndUpdate(id, data, { new: true });