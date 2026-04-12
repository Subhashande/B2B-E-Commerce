import mongoose from "mongoose";
import { ORDER_STATUS } from "../../constants/orderStatus.js"; // ✅ added

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

    totalAmount: { type: Number, required: true },

    status: {
      type: String,
      enum: Object.values(ORDER_STATUS), // ✅ replaced
      default: ORDER_STATUS.PENDING,     // ✅ replaced
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);