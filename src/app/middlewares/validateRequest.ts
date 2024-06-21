import { NextFunction, Request, Response } from "express";
import { AnyZodObject, ZodError } from "zod";

const validateRequest = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync(req.body);
      next();
    } catch (err) {
      if (err instanceof ZodError) {
        const errors = err.errors.map((e) => ({
          path: e.path.join("."),
          message: e.message,
        }));

        return res.status(400).json({
          success: false,
          message: "Validation Error",
          errors,
        });
      }
      next(err);
    }
  };
};

export default validateRequest;
