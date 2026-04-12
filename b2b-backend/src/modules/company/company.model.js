// src/modules/company/company.model.js

import mongoose from "mongoose";

const companySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },

    gst: {
      type: String,
      default: null,
    },

    address: { type: String, required: true },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Company", companySchema);