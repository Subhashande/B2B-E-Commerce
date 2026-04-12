import * as orderService from "./order.service.js";

export const createOrder = async (req, res, next) => {
  try {
    const order = await orderService.placeOrder(
      req.user.id,
      req.body
    );

    res.status(201).json({
      success: true,
      order,
    });
  } catch (err) {
    next(err);
  }
};

export const getMyOrders = async (req, res, next) => {
  try {
    const orders = await orderService.fetchMyOrders(req.user.id);

    res.json({
      success: true,
      orders,
    });
  } catch (err) {
    next(err);
  }
};

export const getAllOrders = async (req, res, next) => {
  try {
    const orders = await orderService.fetchAllOrders();

    res.json({
      success: true,
      orders,
    });
  } catch (err) {
    next(err);
  }
};