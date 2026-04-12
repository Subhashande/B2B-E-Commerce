// src/services/vendorAssignment.service.js

import Vendor from "../modules/vendor/vendor.model.js";

export const findBestVendor = async () => {
  // simple logic: available + highest capacity
  return await Vendor.findOne({ isAvailable: true })
    .sort({ capacity: -1 });
};