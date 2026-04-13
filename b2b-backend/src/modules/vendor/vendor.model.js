// src/modules/vendor/vendor.model.js

import mongoose from "mongoose";
import { VENDOR_STATUS } from "../../constants/vendorStatus.js";

const vendorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },

    location: String,

    capacity: {
      type: Number,
      default: 0,
    },

    isAvailable: {
      type: Boolean,
      default: true,
    },

    status: {
      type: String,
      enum: Object.values(VENDOR_STATUS),
      default: VENDOR_STATUS.ACTIVE,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Vendor", vendorSchema);