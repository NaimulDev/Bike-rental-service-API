import { z } from "zod";

const signUpSchema = z.object({
  name: z.string().nonempty({ message: "Name is required" }),
  email: z.string().email({ message: "Invalid email format" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 characters long" })
    .max(15, { message: "Phone number must be at most 15 characters long" }),
  address: z.string().nonempty({ message: "Address is required" }),
  role: z.enum(["admin", "user"], {
    message: "Role must be either 'admin' or 'user'",
  }),
});
const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

const updateProfileSchema = z.object({
  name: z.string().optional(),
  phone: z.string().min(10).max(15).optional(),
});

export const UserValidations = {
  signUpSchema,
  loginSchema,
  updateProfileSchema,
};
