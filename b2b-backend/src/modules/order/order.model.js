// src/modules/order/order.model.js

import mongoose from "mongoose";
import { ORDER_STATUS } from "../../constants/orderStatus.js";
import { PAYMENT_STATUS } from "../../constants/paymentStatus.js";

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    companyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
    },

    items: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
        },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true },
      },
    ],

    totalAmount: {
      type: Number,
      required: true,
    },

    status: {
      type: String,
      enum: Object.values(ORDER_STATUS),
      default: ORDER_STATUS.PENDING,
    },

    paymentStatus: {
      type: String,
      enum: Object.values(PAYMENT_STATUS),
      default: PAYMENT_STATUS.PENDING,
    },

    paymentType: {
      type: String,
      enum: ["ONLINE", "CREDIT"],
      default: "ONLINE",
    },

    vendorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Vendor",
    },

    dueDate: Date, // for credit system
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);