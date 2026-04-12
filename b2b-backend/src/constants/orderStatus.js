// src/constants/orderStatus.js

export const ORDER_STATUS = {
  PENDING: "PENDING",               // order created
  PROCESSING: "PROCESSING",         // payment done
  ASSIGNED: "ASSIGNED",             // vendor assigned
  PACKED: "PACKED",                 // vendor prepared
  OUT_FOR_DELIVERY: "OUT_FOR_DELIVERY",
  DELIVERED: "DELIVERED",
  CANCELLED: "CANCELLED",
};

export const ORDER_STATUS_LIST = Object.values(ORDER_STATUS);