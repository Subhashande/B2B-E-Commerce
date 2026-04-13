// src/jobs/creditReminder.job.js

import cron from "node-cron";
import Order from "../modules/order/order.model.js";
import { sendEmail } from "../services/email.service.js";

export const startCreditReminderJob = () => {
  cron.schedule("0 9 * * *", async () => {
    console.log("Running credit reminder job...");

    const overdueOrders = await Order.find({
      paymentType: "CREDIT",
      dueDate: { $lt: new Date() },
    }).populate("userId");

    for (const order of overdueOrders) {
      await sendEmail(
        order.userId.email,
        "Payment Reminder",
        "Your payment is overdue. Please complete it."
      );
    }
  });
};