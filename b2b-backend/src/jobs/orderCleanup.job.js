// src/jobs/orderCleanup.job.js

import cron from "node-cron";
import Order from "../modules/order/order.model.js";
import { ORDER_STATUS } from "../constants/orderStatus.js";

export const startOrderCleanupJob = () => {
  // Runs every day at midnight
  cron.schedule("0 0 * * *", async () => {
    console.log("Running order cleanup job...");

    try {
      const result = await Order.deleteMany({
        status: ORDER_STATUS.PENDING,
        createdAt: { $lt: new Date(Date.now() - 24 * 60 * 60 * 1000) },
      });

      console.log(`Deleted ${result.deletedCount} stale orders`);
    } catch (err) {
      console.error("Cleanup job error:", err.message);
    }
  });
};