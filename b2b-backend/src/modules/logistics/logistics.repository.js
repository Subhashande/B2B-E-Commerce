// src/modules/logistics/logistics.repository.js

// MOCK LOGISTICS STORAGE
const mockLogistics = [
  {
    _id: "1",
    orderId: "1",
    trackingId: "TRK123456",
    carrier: "BlueDart",
    status: "shipped",
    estimatedDelivery: new Date("2024-04-20"),
  },
  {
    _id: "2",
    orderId: "2",
    trackingId: "TRK789012",
    carrier: "Delhivery",
    status: "delivered",
    estimatedDelivery: new Date("2024-04-15"),
  },
];

export const createLogistics = async (data) => {
  const newLogistics = {
    _id: (mockLogistics.length + 1).toString(),
    ...data,
  };
  mockLogistics.push(newLogistics);
  return newLogistics;
};

export const getByOrder = async (orderId) =>
  mockLogistics.find((l) => l.orderId === orderId);

export const getAllLogistics = async () => mockLogistics;