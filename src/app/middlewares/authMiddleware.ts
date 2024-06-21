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

  const token = authHeader.split(" ")[1];
  const decoded = jwt.verify(token, process.env.JWT_SECRET as string);

  const user = await User.findById((decoded as any).id);
  if (!user) {
    return next(new AppError("You have no access to this route", 401));
  }

  req.user = user;
  next();
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
