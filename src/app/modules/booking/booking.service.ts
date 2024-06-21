import { IBooking } from "./booking.interface";
import { Booking } from "./booking.model";
import { Bike } from "../bike/bike.model";

const createBooking = async (
  userId: string,
  bikeId: string,
  startTime: Date
) => {
  const bike = await Bike.findById(bikeId);
  if (!bike || !bike.isAvailable) throw new Error("Bike not available");

  const booking = new Booking({ userId, bikeId, startTime });
  await booking.save();

  bike.isAvailable = false;
  await bike.save();

  return booking;
};

const returnBike = async (bookingId: string) => {
  const booking = await Booking.findById(bookingId);
  if (!booking || booking.isReturned)
    throw new Error("Booking not found or already returned");

  const bike = await Bike.findById(booking.bikeId);
  if (!bike) throw new Error("Bike not found");

  const endTime = new Date();
  const duration =
    (endTime.getTime() - booking.startTime.getTime()) / (1000 * 60 * 60);
  const totalCost = duration * bike.pricePerHour;

  booking.returnTime = endTime;
  booking.totalCost = totalCost;
  booking.isReturned = true;
  await booking.save();

  bike.isAvailable = true;
  await bike.save();

  return booking;
};

const getUserBookings = async (userId: string) => {
  const bookings = await Booking.find({ userId });
  return bookings;
};

export const BookingService = {
  createBooking,
  returnBike,
  getUserBookings,
};
