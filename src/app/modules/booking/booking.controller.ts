import { Request, Response } from "express";
import { BookingService } from "./booking.service";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";

const createBooking = catchAsync(async (req: Request, res: Response) => {
  const result = await BookingService.createBooking(
    req.user!.id,
    req.body.bikeId,
    new Date(req.body.startTime)
  );
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Rental created successfully",
    data: result,
  });
});

const returnBike = catchAsync(async (req: Request, res: Response) => {
  const result = await BookingService.returnBike(req.params.id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Bike returned successfully",
    data: result,
  });
});

const getUserBookings = catchAsync(async (req: Request, res: Response) => {
  const result = await BookingService.getUserBookings(req.user!.id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Rentals retrieved successfully",
    data: result,
  });
});

export const BookingController = {
  createBooking,
  returnBike,
  getUserBookings,
};
