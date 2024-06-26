import { Schema, model } from "mongoose";
import { IBooking } from "./booking.interface";

const BookingSchema = new Schema<IBooking>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    bikeId: {
      type: Schema.Types.ObjectId,
      ref: "Bike",
      required: true,
    },
    startTime: { type: Date, required: true },
    returnTime: { type: Date, default: null },
    totalCost: { type: Number, default: 0 },
    isReturned: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const Booking = model<IBooking>("Booking", BookingSchema);
