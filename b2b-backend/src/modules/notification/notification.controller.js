// src/modules/notification/notification.controller.js

import * as notificationService from "./notification.service.js";

export const getNotifications = async (req, res, next) => {
  try {
    const result = await notificationService.fetchNotifications(
      req.user.id
    );
    res.json({ 
      success: true, 
      notifications: result || [] 
    });
  } catch (err) {
    next(err);
  }
};

export const markRead = async (req, res, next) => {
  try {
    const result = await notificationService.readNotification(
      req.params.id
    );
    res.json({ success: true, data: result });
  } catch (err) {
    next(err);
  }
};