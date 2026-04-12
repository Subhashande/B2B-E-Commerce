// modules/user/user.model.js

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },

  role: {
    type: String,
    enum: ["ADMIN", "USER"],
    default: "USER",
  },

  status: {
    type: String,
    enum: ["PENDING", "APPROVED", "REJECTED"],
    default: "PENDING",
  },

  companyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company",
  },
}, { timestamps: true });

export default mongoose.model("User", userSchema);