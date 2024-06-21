import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import catchAsync from "../utils/catchAsync";
import AppError from "../utils/AppError";
import { User } from "../modules/user/user.model";

const authMiddleware = catchAsync(async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return next(new AppError("You have no access to this route", 401));
  }

  const token = authHeader.split(" ")[1]; // Split by space and get the second part
  console.log("Token:", token); // Debugging line

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
    console.log("Decoded Token:", decoded); // Debugging line

    const user = await User.findById((decoded as any).id);
    if (!user) {
      return next(new AppError("User not found", 401));
    }

    req.user = user;
    next();
  } catch (err) {
    console.error("Token verification error:", err); // Debugging line
    return next(new AppError("Invalid token", 401));
  }
});

const adminMiddleware = (req: Request, res: Response, next: NextFunction) => {
  if (req.user?.role !== "admin") {
    return next(new AppError("You have no access to this route", 401));
  }
  next();
};

export const UserMiddleware = {
  authMiddleware,
  adminMiddleware,
};
