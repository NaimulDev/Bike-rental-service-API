import catchAsync from "../../utils/catchAsync";
import { BikeServices } from "./bike.service";
import sendResponse from "../../utils/sendResponse";

const createBike = catchAsync(async (req, res) => {
  const result = await BikeServices.createBikeIntoDB(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Academic semester is created successfully",
    data: result,
  });
});

const getAllBikes = catchAsync(async (req, res) => {
  const result = await BikeServices.getAllBikesFromDB();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Bikes retrieved successfully",
    data: result,
  });
});

const updateBike = catchAsync(async (req, res) => {
  const result = await BikeServices.updateBikeIntoDB(req.params.id, req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Bike updated successfully",
    data: result,
  });
});

const deleteBike = catchAsync(async (req, res) => {
  const result = await BikeServices.deleteBikeIntoDB(req.params.id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Bike deleted successfully",
    data: result,
  });
});

export const BikesControllers = {
  createBike,
  getAllBikes,
  updateBike,
  deleteBike,
};
