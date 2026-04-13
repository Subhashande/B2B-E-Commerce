import Logistics from "./logistics.model.js";

export const createLogistics = (data) => Logistics.create(data);

export const getByOrder = (orderId) =>
  Logistics.findOne({ orderId });