import mongoose from "mongoose";

const invoiceSchema = new mongoose.Schema(
  {
    orderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
      required: true,
    },

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    companyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
    },

    amount: Number,

    invoiceNumber: {
      type: String,
      unique: true,
    },

    status: {
      type: String,
      enum: ["GENERATED", "PAID"],
      default: "GENERATED",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Invoice", invoiceSchema);