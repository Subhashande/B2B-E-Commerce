// src/modules/credit/credit.model.js

import mongoose from "mongoose";
import { CREDIT_STATUS } from "../../constants/creditStatus.js";

const creditSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },

    creditLimit: {
      type: Number,
      required: true,
      default: 0,
    },

    usedCredit: {
      type: Number,
      default: 0,
    },

    availableCredit: {
      type: Number,
      default: 0,
    },

    status: {
      type: String,
      enum: Object.values(CREDIT_STATUS),
      default: CREDIT_STATUS.ACTIVE,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Credit", creditSchema);