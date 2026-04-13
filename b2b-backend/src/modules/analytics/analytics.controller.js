// src/modules/analytics/analytics.controller.js

import * as analyticsService from "./analytics.service.js";

export const getStats = async (req, res, next) => {
  try {
    const data = await analyticsService.getDashboardStats();
    res.json({ success: true, data });
  } catch (err) {
    next(err);
  }
};

export const getSales = async (req, res, next) => {
  try {
    const data = await analyticsService.getMonthlySales();
    res.json({ success: true, data });
  } catch (err) {
    next(err);
  }
};