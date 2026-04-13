// src/jobs/notification.job.js

import cron from "node-cron";

export const startNotificationJob = () => {
  cron.schedule("*/5 * * * *", async () => {
    console.log("Checking notifications...");
    // future: process queued notifications
  });
};