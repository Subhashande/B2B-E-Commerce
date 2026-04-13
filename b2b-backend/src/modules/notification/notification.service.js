// src/modules/notification/notification.service.js

import {
  createNotification,
  getUserNotifications,
  markAsRead,
} from "./notification.repository.js";

import { sendEmail } from "../../services/email.service.js";

// 🔥 CREATE NOTIFICATION (CORE FUNCTION)
export const notifyUser = async (userId, type, message, email) => {
  // DB Notification
  await createNotification({
    userId,
    type,
    message,
  });

  // Email Notification
  if (email) {
    await sendEmail(email, type, message);
  }
};

// GET USER NOTIFICATIONS
export const fetchNotifications = async (userId) => {
  return await getUserNotifications(userId);
};

// MARK AS READ
export const readNotification = async (id) => {
  return await markAsRead(id);
};