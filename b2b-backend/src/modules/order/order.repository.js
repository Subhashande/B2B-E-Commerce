// MOCK ORDER STORAGE
const mockOrders = [];

export const createOrder = async (data) => {
  const newOrder = {
    _id: (mockOrders.length + 1).toString(),
    ...data,
    createdAt: new Date(),
  };
  mockOrders.push(newOrder);
  return newOrder;
};

export const getOrdersByUser = async (userId) => {
  return mockOrders.filter((order) => order.userId === userId);
};

export const getAllOrders = async () => {
  return mockOrders;
};

export const getOrderById = async (id) => {
  return mockOrders.find((order) => order._id === id);
};

export const updateOrderStatus = async (id, status) => {
  return updateOrder(id, { status });
};

export const updateOrder = async (id, data) => {
  const index = mockOrders.findIndex((o) => o._id === id);
  if (index !== -1) {
    mockOrders[index] = { ...mockOrders[index], ...data };
    return mockOrders[index];
  }
  return null;
};