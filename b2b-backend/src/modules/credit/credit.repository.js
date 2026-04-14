// src/modules/credit/credit.repository.js

// MOCK CREDIT STORAGE
const mockCredits = [
  {
    _id: "1",
    userId: "1",
    limit: 500000,
    used: 120000,
  },
  {
    _id: "2",
    userId: "2",
    limit: 100000,
    used: 5000,
  },
];

export const createCredit = async (data) => {
  const newCredit = {
    _id: (mockCredits.length + 1).toString(),
    ...data,
  };
  mockCredits.push(newCredit);
  return newCredit;
};

export const findCreditByUser = async (userId) =>
  mockCredits.find((c) => c.userId === userId);

export const updateCredit = async (id, data) => {
  const index = mockCredits.findIndex((c) => c._id === id);
  if (index !== -1) {
    mockCredits[index] = { ...mockCredits[index], ...data };
    return mockCredits[index];
  }
  return null;
};

export const deleteCredit = async (id) => {
  const index = mockCredits.findIndex((c) => c._id === id);
  if (index !== -1) {
    const deleted = mockCredits[index];
    mockCredits.splice(index, 1);
    return deleted;
  }
  return null;
};