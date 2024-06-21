import { z } from "zod";

const createBikeSchema = z.object({
  name: z.string(),
  description: z.string(),
  pricePerHour: z.number(),
  isAvailable: z.boolean(),
  cc: z.number(),
  year: z.number(),
  model: z.string(),
  brand: z.string(),
});

const updateBikeSchema = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
  pricePerHour: z.number().positive().optional(),
  isAvailable: z.boolean().optional(),
  cc: z.number().positive().optional(),
  year: z.number().int().optional(),
  model: z.string().optional(),
  brand: z.string().optional(),
});

// export const validateBike = (data: any) => bikeSchema.safeParse(data);

export const BikeValidations = {
  createBikeSchema,
  updateBikeSchema,
};
