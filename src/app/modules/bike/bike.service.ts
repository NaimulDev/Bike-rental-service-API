import { IBike } from "./bike.interface";
import { Bike } from "./bike.model";

const createBikeIntoDB = async (payload: IBike) => {
  const result = await Bike.create(payload);
  return result;
};

const getAllBikesFromDB = async () => {
  const result = await Bike.find();
  return result;
};

const updateBikeIntoDB = async (id: string, payload: Partial<IBike>) => {
  const result = await Bike.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

const deleteBikeIntoDB = async (id: string) => {
  const bike = await Bike.findByIdAndDelete(id);
  if (!bike) throw new Error("Bike not found");
  return bike;
};
export const BikeServices = {
  createBikeIntoDB,
  getAllBikesFromDB,
  updateBikeIntoDB,
  deleteBikeIntoDB,
};
