import express from "express";
import { BikesControllers } from "./bike.controller";

import validateRequest from "../../middlewares/validateRequest";
import { BikeValidations } from "./bike.Validators";
import { UserMiddleware } from "../../middlewares/authMiddleware";

const router = express.Router();

router.post(
  "/",
  UserMiddleware.authMiddleware,
  UserMiddleware.adminMiddleware,
  validateRequest(BikeValidations.createBikeSchema),
  BikesControllers.createBike
);
router.get("/", BikesControllers.getAllBikes);
router.put(
  "/:id",
  UserMiddleware.authMiddleware,
  UserMiddleware.adminMiddleware,
  validateRequest(BikeValidations.updateBikeSchema),
  BikesControllers.updateBike
);
router.delete(
  "/:id",
  UserMiddleware.authMiddleware,
  UserMiddleware.adminMiddleware,
  BikesControllers.deleteBike
);

export const bikeRoutes = router;
