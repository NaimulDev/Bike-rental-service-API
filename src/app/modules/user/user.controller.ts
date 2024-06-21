// import { Request, Response } from "express";

// import { UserService } from "./user.service";
// import { IUser } from "./user.interface";
// import catchAsync from "../../utils/catchAsync";
// import sendResponse from "../../utils/sendResponse";

// const signUp = catchAsync(async (req, res) => {
//   const result = await UserService.signUp(req.body as IUser);
//   sendResponse(res, {
//     statusCode: 201,
//     success: true,
//     message: "User registered successfully",
//     data: result,
//   });
// });

// const login = catchAsync(async (req, res) => {
//   const { email, password } = req.body;
//   const { user, token } = await UserService.login(email, password);
//   sendResponse(res, {
//     statusCode: 200,
//     success: true,
//     message: "User logged in successfully",
//     data: user,
//     token,
//   });
// });

// const getProfile = catchAsync(async (req: Request, res: Response) => {
//   const result = await UserService.getUserById(req.user.id);
//   sendResponse(res, {
//     statusCode: 200,
//     success: true,
//     message: "User profile retrieved successfully",
//     data: result,
//   });
// });

// const updateProfile = catchAsync(async (req: Request, res: Response) => {
//   const result = await UserService.updateUser(req.user.id, req.body);
//   sendResponse(res, {
//     statusCode: 200,
//     success: true,
//     message: "Profile updated successfully",
//     data: result,
//   });
// });

// export const UserController = {
//   signUp,
//   login,
//   getProfile,
//   updateProfile,
// };
import { Request, Response } from "express";

import { UserService } from "./user.service";
import { IUser } from "./user.interface";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";

const signUp = catchAsync(async (req, res) => {
  const result = await UserService.signUp(req.body as IUser);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "User registered successfully",
    data: result,
  });
});

const login = catchAsync(async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const { user, token } = await UserService.login(email, password);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "User logged in successfully",
    data: user,
    token,
  });
});

const getProfile = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.getUserById(req.user!.id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "User profile retrieved successfully",
    data: result,
  });
});

const updateProfile = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.updateUser(req.user!.id, req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Profile updated successfully",
    data: result,
  });
});

export const UserController = {
  signUp,
  login,
  getProfile,
  updateProfile,
};
