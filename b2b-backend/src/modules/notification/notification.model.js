// src/modules/notification/notification.model.js

import mongoose from "mongoose";
import { NOTIFICATION_TYPES } from "../../constants/notificationTypes.js";

const notificationSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    type: {
      type: String,
      enum: Object.values(NOTIFICATION_TYPES),
      required: true,
    },

    message: {
      type: String,
      required: true,
    },

    isRead: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Notification", notificationSchema);