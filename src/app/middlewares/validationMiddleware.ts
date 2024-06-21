import { z, ZodError } from "zod";
import { Request, Response, NextFunction } from "express";
import catchAsync from "../utils/catchAsync";
import AppError from "../utils/AppError";
import { UserValidations } from "../modules/user/user.validation";

// Generic validation middleware
const validate = (schema: z.ZodSchema<any>) =>
  catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    try {
      req.body = schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        const errors = error.errors.map((e) => ({
          path: e.path.join("."),
          message: e.message,
        }));
        return next(new AppError(JSON.stringify(errors), 400));
      }
      next(error);
    }
  });

export const validateSignUp = validate(UserValidations.signUpSchema);
export const validateLogin = validate(UserValidations.loginSchema);
export const validateUpdateProfile = validate(
  UserValidations.updateProfileSchema
);
