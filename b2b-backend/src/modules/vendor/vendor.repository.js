import Vendor from "./vendor.model.js";

export const createVendor = (data) => Vendor.create(data);

export const getVendors = () => Vendor.find();

export const getVendorById = (id) => Vendor.findById(id);