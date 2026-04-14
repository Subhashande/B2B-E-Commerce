// src/modules/notification/notification.repository.js

import Notification from "./notification.model.js";

// MOCK NOTIFICATION STORAGE
const mockNotifications = [];

export const createNotification = async (data) => {
  const newNotification = {
    _id: (mockNotifications.length + 1).toString(),
    ...data,
    isRead: false,
    createdAt: new Date(),
  };
  mockNotifications.push(newNotification);
  return newNotification;
};

export const getUserNotifications = async (userId) => {
  return mockNotifications
    .filter((n) => n.userId === userId)
    .sort((a, b) => b.createdAt - a.createdAt);
};

export const markAsRead = async (id) => {
  const notification = mockNotifications.find((n) => n._id === id);
  if (notification) {
    notification.isRead = true;
    return notification;
  }
  return null;
};