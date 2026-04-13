import * as logisticsService from "./logistics.service.js";

export const createTracking = async (req, res, next) => {
  try {
    const data = await logisticsService.createTracking(req.body);
    res.json({ success: true, data });
  } catch (err) {
    next(err);
  }
};

export const updateTracking = async (req, res, next) => {
  try {
    const data = await logisticsService.updateTracking(
      req.params.orderId,
      req.body.status
    );
    res.json({ success: true, data });
  } catch (err) {
    next(err);
  }
};