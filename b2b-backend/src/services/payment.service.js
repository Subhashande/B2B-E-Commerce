// src/services/payment.service.js

import Razorpay from "razorpay";
import { ENV } from "../config/env.js";

const razorpay = new Razorpay({
  key_id: ENV.RAZORPAY_KEY_ID,
  key_secret: ENV.RAZORPAY_SECRET,
});

export default razorpay;