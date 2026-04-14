// src/modules/review/review.repository.js

// MOCK REVIEW STORAGE
const mockReviews = [
  {
    _id: "1",
    productId: "1",
    userName: "John Doe",
    rating: 5,
    comment: "Excellent product, highly recommended!",
    createdAt: new Date("2024-01-15"),
  },
  {
    _id: "2",
    productId: "1",
    userName: "Alice Smith",
    rating: 4,
    comment: "Good quality, but delivery took some time.",
    createdAt: new Date("2024-02-10"),
  },
];

export const createReview = async (data) => {
  const newReview = {
    _id: (mockReviews.length + 1).toString(),
    ...data,
    createdAt: new Date(),
  };
  mockReviews.push(newReview);
  return newReview;
};

export const getProductReviews = async (productId) =>
  mockReviews.filter((r) => r.productId === productId);