import mongoose from "mongoose";

const logisticsSchema = new mongoose.Schema(
  {
    orderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
    },

    vendorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Vendor",
    },

    status: {
      type: String,
      enum: ["PICKED", "IN_TRANSIT", "DELIVERED"],
      default: "PICKED",
    },

    location: String,
  },
  { timestamps: true }
);

export default mongoose.model("Logistics", logisticsSchema);