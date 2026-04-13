import {
  createReview,
  getProductReviews,
} from "./review.repository.js";

export const addReview = async (userId, data) => {
  return await createReview({
    userId,
    ...data,
  });
};

export const fetchReviews = async (productId) => {
  return await getProductReviews(productId);
};