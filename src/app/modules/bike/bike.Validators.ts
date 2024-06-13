import { z } from "zod";

const bikeSchema = z.object({
  name: z.string(),
  description: z.string(),
  pricePerHour: z.number(),
  isAvailable: z.boolean(),
  cc: z.number(),
  year: z.number(),
  model: z.string(),
  brand: z.string(),
});

export const validateBike = (data: any) => bikeSchema.safeParse(data);
