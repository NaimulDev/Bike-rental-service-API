import express from "express";
import { BookingController } from "./booking.controller";

import { validateBooking } from "./booking.validation";
import { UserMiddleware } from "../../middlewares/authMiddleware";
import validateRequest from "../../middlewares/validateRequest";

const router = express.Router();

router.post(
  "/",
  UserMiddleware.authMiddleware,
  validateRequest(validateBooking.createBookingSchema),
  BookingController.createBooking
);
router.put(
  "/:id/return",
  UserMiddleware.authMiddleware,
  UserMiddleware.adminMiddleware,
  BookingController.returnBike
);
router.get(
  "/",
  UserMiddleware.authMiddleware,
  BookingController.getUserBookings
);

export const bookingRoutes = router;
