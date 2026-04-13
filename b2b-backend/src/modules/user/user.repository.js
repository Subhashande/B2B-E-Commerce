// MOCK USER STORAGE
const mockUsers = [
  {
    _id: "1",
    name: "Admin User",
    email: "admin@example.com",
    role: "ADMIN",
    status: "APPROVED",
  },
  {
    _id: "2",
    name: "Subhash",
    email: "subhash@example.com",
    role: "USER",
    status: "PENDING",
  },
];

export const getUsers = async () => mockUsers;

export const getUserById = async (id) =>
  mockUsers.find((user) => user._id === id);

export const updateUser = async (id, data) => {
  const index = mockUsers.findIndex((u) => u._id === id);
  if (index !== -1) {
    mockUsers[index] = { ...mockUsers[index], ...data };
    return mockUsers[index];
  }
  return null;
};

export const deleteUser = async (id) => {
  const index = mockUsers.findIndex((u) => u._id === id);
  if (index !== -1) {
    return mockUsers.splice(index, 1)[0];
  }
  return null;
};

export const getPendingUsers = async () =>
  mockUsers.filter((user) => user.status === "pending");

export const updateUserStatus = async (id, status) => {
  return updateUser(id, { status });
};