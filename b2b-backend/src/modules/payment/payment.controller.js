import * as paymentService from "./payment.service.js";

export const createOrder = async (req, res, next) => {
  try {
    const razorpayOrder =
      await paymentService.createRazorpayOrder(
        req.params.orderId
      );

    res.json({
      success: true,
      razorpayOrder,
    });
  } catch (err) {
    next(err);
  }
};

export const verifyPayment = async (req, res, next) => {
  try {
    const result = await paymentService.verifyPayment(req.body);

    res.json({
      success: true,
      ...result,
    });
  } catch (err) {
    next(err);
  }
};