import * as reviewService from "./review.service.js";

export const createReview = async (req, res, next) => {
  try {
    const data = await reviewService.addReview(
      req.user.id,
      req.body
    );
    res.json({ success: true, data });
  } catch (err) {
    next(err);
  }
};

export const getReviews = async (req, res, next) => {
  try {
    const data = await reviewService.fetchReviews(
      req.params.productId
    );
    res.json({ success: true, data });
  } catch (err) {
    next(err);
  }
};