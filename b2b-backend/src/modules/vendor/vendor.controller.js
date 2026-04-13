// src/modules/vendor/vendor.controller.js

import * as vendorService from "./vendor.service.js";

export const createVendor = async (req, res, next) => {
  try {
    const result = await vendorService.addVendor(req.body);
    res.status(201).json({ success: true, data: result });
  } catch (err) {
    next(err);
  }
};

export const getVendors = async (req, res, next) => {
  try {
    const result = await vendorService.fetchVendors();
    res.json({ success: true, data: result });
  } catch (err) {
    next(err);
  }
};

// 🔥 AUTO ASSIGN
export const assignVendor = async (req, res, next) => {
  try {
    const result = await vendorService.assignVendorToOrder(
      req.params.orderId
    );
    res.json({ success: true, data: result });
  } catch (err) {
    next(err);
  }
};

// 🔥 MANUAL ASSIGN
export const manualAssign = async (req, res, next) => {
  try {
    const result = await vendorService.manualAssignVendor(
      req.params.orderId,
      req.body.vendorId
    );
    res.json({ success: true, data: result });
  } catch (err) {
    next(err);
  }
};

// 🔥 STATUS UPDATE
export const updateStatus = async (req, res, next) => {
  try {
    const result = await vendorService.updateOrderStatus(
      req.params.orderId,
      req.body.status
    );
    res.json({ success: true, data: result });
  } catch (err) {
    next(err);
  }
};