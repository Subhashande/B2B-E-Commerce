import {
  createLogistics,
  getByOrder,
} from "./logistics.repository.js";

export const createTracking = async (data) => {
  return await createLogistics(data);
};

export const updateTracking = async (orderId, status) => {
  const track = await getByOrder(orderId);

  track.status = status;
  await track.save();

  return track;
};