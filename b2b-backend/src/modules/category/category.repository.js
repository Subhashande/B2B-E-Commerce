// src/modules/category/category.repository.js

// MOCK CATEGORY STORAGE
const mockCategories = [
  { _id: "1", name: "Electronics" },
  { _id: "2", name: "Computing" },
  { _id: "3", name: "Accessories" },
];

export const createCategory = async (data) => {
  const newCategory = {
    _id: (mockCategories.length + 1).toString(),
    ...data,
  };
  mockCategories.push(newCategory);
  return newCategory;
};

export const getAllCategories = async () => mockCategories;

export const getCategoryById = async (id) =>
  mockCategories.find((cat) => cat._id === id);

export const updateCategory = async (id, data) => {
  const index = mockCategories.findIndex((cat) => cat._id === id);
  if (index !== -1) {
    mockCategories[index] = { ...mockCategories[index], ...data };
    return mockCategories[index];
  }
  return null;
};

export const deleteCategory = async (id) => {
  const index = mockCategories.findIndex((cat) => cat._id === id);
  if (index !== -1) {
    return mockCategories.splice(index, 1)[0];
  }
  return null;
};