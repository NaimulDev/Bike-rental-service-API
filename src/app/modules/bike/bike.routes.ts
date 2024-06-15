import express from "express";
import { BikesControllers } from "./bike.controller";

const router = express.Router();

router.post("/", BikesControllers.createBike);
// router.get("/", getAllBikes);
// router.put("/:id", updateBike);
// router.delete("/:id", deleteBike);

export const bikeRoutes = router;
