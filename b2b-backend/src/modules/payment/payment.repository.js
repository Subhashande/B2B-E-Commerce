// src/modules/payment/payment.repository.js

import Payment from "./payment.model.js";

// MOCK PAYMENT STORAGE
const mockPayments = [];

export const createPayment = async (data) => {
  const newPayment = {
    _id: (mockPayments.length + 1).toString(),
    ...data,
    save: async function() {
      const index = mockPayments.findIndex(p => p._id === this._id);
      if (index !== -1) mockPayments[index] = { ...this };
    }
  };
  mockPayments.push(newPayment);
  return newPayment;
};

export const findByRazorpayOrderId = async (id) =>
  mockPayments.find((p) => p.razorpayOrderId === id);

export const updatePayment = async (id, data) => {
  const index = mockPayments.findIndex((p) => p._id === id);
  if (index !== -1) {
    mockPayments[index] = { ...mockPayments[index], ...data };
    return mockPayments[index];
  }
  return null;
};