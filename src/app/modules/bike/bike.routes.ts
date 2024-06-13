import express from "express";
import {
  createBike,
  getAllBikes,
  updateBike,
  deleteBike,
} from "./bike.controller";

const router = express.Router();

router.get("/", getAllBikes);
router.post("/", createBike);
router.put("/:id", updateBike);
router.delete("/:id", deleteBike);

export const bikeRoutes = router;
