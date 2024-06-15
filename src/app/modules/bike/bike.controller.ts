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

export const BikesControllers = {
  createBike,
  // deleteBike,
  // getAllBikes,
  // updateBike,
};
