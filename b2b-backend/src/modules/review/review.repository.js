import Review from "./review.model.js";

export const createReview = (data) => Review.create(data);

export const getProductReviews = (productId) =>
  Review.find({ productId });