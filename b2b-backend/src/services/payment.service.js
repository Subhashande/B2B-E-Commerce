// src/services/payment.service.js

import Razorpay from "razorpay";
import { ENV } from "../config/env.js";

let razorpay = null;

try {
  if (ENV.RAZORPAY_KEY_ID && ENV.RAZORPAY_SECRET) {
    razorpay = new Razorpay({
      key_id: ENV.RAZORPAY_KEY_ID,
      key_secret: ENV.RAZORPAY_SECRET,
    });
    console.log("✅ Razorpay initialized successfully");
  } else {
    console.warn("⚠️ Razorpay keys missing. Payment features will be disabled or mocked.");
  }
} catch (error) {
  console.error("❌ Failed to initialize Razorpay:", error.message);
}

export default razorpay;