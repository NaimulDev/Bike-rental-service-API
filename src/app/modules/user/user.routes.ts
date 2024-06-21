// import express from "express";
// import { UserController } from "./user.controller";

// import validateRequest from "../../middlewares/validateRequest";

// import { UserValidations } from "./user.validation";
// import { UserMiddleware } from "../../middlewares/authMiddleware";

// const router = express.Router();

// router.post(
//   "/signup",
//   validateRequest(UserValidations.signUpSchema),
//   UserController.signUp
// );
// router.post(
//   "/login",
//   validateRequest(UserValidations.loginSchema),
//   UserController.login
// );
// router.get("/me", UserMiddleware.authMiddleware, UserController.getProfile);
// router.put(
//   "/me",
//   UserMiddleware.authMiddleware,
//   validateRequest(UserValidations.updateProfileSchema),
//   UserController.updateProfile
// );

// export const userRoutes = router;

import express from "express";
import { UserController } from "./user.controller";
import validateRequest from "../../middlewares/validateRequest";
import { UserValidations } from "./user.validation";
import { UserMiddleware } from "../../middlewares/authMiddleware";

const router = express.Router();

// router.post(
//   "/signup",
//   validateRequest(UserValidations.signUpSchema),
//   UserController.signUp
// );

// router.post(
//   "/login",
//   validateRequest(UserValidations.loginSchema),
//   UserController.login
// );

router.get("/me", UserMiddleware.authMiddleware, UserController.getProfile);

router.put(
  "/me",
  UserMiddleware.authMiddleware,
  validateRequest(UserValidations.updateProfileSchema),
  UserController.updateProfile
);

export const userRoutes = router;
