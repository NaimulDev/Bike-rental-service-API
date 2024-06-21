import { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = 500;
  let message = "Something went wrong";

  if (err instanceof ZodError) {
    statusCode = 400;
    message = "Validation Error";
    const errors = err.errors.map((e) => ({
      path: e.path.join("."),
      message: e.message,
    }));
    return res.status(statusCode).json({
      success: false,
      message,
      errors,
    });
  }

  if (err.statusCode) {
    statusCode = err.statusCode;
    message = err.message;
  }

  return res.status(statusCode).json({
    success: false,
    message,
    error: err,
  });
};

export default globalErrorHandler;
