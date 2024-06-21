import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { UserValidations } from "../user/user.validation";
import { UserController } from "../user/user.controller";

const router = express.Router();

router.post(
  "/signup",
  validateRequest(UserValidations.signUpSchema),
  UserController.signUp
);

router.post(
  "/login",
  validateRequest(UserValidations.loginSchema),
  UserController.login
);

export const authRoutes = router;
