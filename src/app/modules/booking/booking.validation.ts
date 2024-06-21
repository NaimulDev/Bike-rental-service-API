import { z } from "zod";

const createBookingSchema = z.object({
  bikeId: z.string(),
  startTime: z.string(),
});

export const validateBooking = {
  createBookingSchema,
};
