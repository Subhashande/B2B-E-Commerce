// src/modules/payment/payment.model.js

import mongoose from "mongoose";
import { PAYMENT_STATUS } from "../../constants/paymentStatus.js";

const paymentSchema = new mongoose.Schema(
  {
    orderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
      required: true,
    },

    razorpayOrderId: String,
    razorpayPaymentId: String,
    razorpaySignature: String,

    amount: {
      type: Number,
      required: true,
    },

    status: {
      type: String,
      enum: Object.values(PAYMENT_STATUS),
      default: PAYMENT_STATUS.PENDING,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Payment", paymentSchema);