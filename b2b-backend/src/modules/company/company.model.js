// modules/company/company.model.js

import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
  name: { type: String, required: true },
  gst: { type: String },
  address: { type: String },
}, { timestamps: true });

export default mongoose.model("Company", companySchema);