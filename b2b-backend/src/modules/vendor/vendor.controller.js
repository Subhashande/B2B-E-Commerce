import * as vendorService from "./vendor.service.js";

export const createVendor = async (req, res, next) => {
  try {
    const vendor = await vendorService.addVendor(req.body);

    res.status(201).json({
      success: true,
      vendor,
    });
  } catch (err) {
    next(err);
  }
};

export const getVendors = async (req, res, next) => {
  try {
    const vendors = await vendorService.fetchVendors();

    res.json({
      success: true,
      vendors,
    });
  } catch (err) {
    next(err);
  }
};

export const assignVendor = async (req, res, next) => {
  try {
    const order = await vendorService.assignVendorToOrder(
      req.params.orderId,
      req.body.vendorId
    );

    res.json({
      success: true,
      order,
    });
  } catch (err) {
    next(err);
  }
};

export const updateStatus = async (req, res, next) => {
  try {
    const order = await vendorService.updateOrderStatus(
      req.params.orderId,
      req.body.status
    );

    res.json({
      success: true,
      order,
    });
  } catch (err) {
    next(err);
  }
};