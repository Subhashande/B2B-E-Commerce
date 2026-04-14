import {
  createLogistics,
  getByOrder,
  getAllLogistics,
} from "./logistics.repository.js";

export const createTracking = async (data) => {
  return await createLogistics(data);
};

export const fetchLogistics = async () => {
  return await getAllLogistics();
};

export const updateTracking = async (orderId, status) => {
  const track = await getByOrder(orderId);
  if (!track) throw new Error("Tracking not found");

  track.status = status;
  return track;
};