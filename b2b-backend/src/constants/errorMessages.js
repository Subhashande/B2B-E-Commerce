// src/constants/errorMessages.js

export const ERROR_MESSAGES = {
  // AUTH
  INVALID_CREDENTIALS: "Invalid email or password",
  UNAUTHORIZED: "Unauthorized access",

  // USER
  USER_NOT_FOUND: "User not found",
  USER_NOT_APPROVED: "User not approved",

  // PRODUCT
  PRODUCT_NOT_FOUND: "Product not found",

  // ORDER
  ORDER_NOT_FOUND: "Order not found",
  INVALID_ORDER_STATUS: "Invalid order status",

  // PAYMENT
  PAYMENT_FAILED: "Payment failed",
  INVALID_PAYMENT_SIGNATURE: "Invalid payment signature",

  // VENDOR
  VENDOR_NOT_FOUND: "Vendor not found",
  VENDOR_NOT_AVAILABLE: "Vendor not available",

  // GENERAL
  INTERNAL_SERVER_ERROR: "Something went wrong",
};

export const ERROR_MESSAGE_LIST = Object.values(ERROR_MESSAGES);