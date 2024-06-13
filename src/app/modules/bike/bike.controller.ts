import { Request, Response } from "express";
import Bike from "./bike.model";
import { validateBike } from "./bike.Validators";

export const getAllBikes = async (req: Request, res: Response) => {
  try {
    const bikes = await Bike.find();
    res
      .status(200)
      .json({
        success: true,
        statusCode: 200,
        message: "Bikes retrieved successfully",
        data: bikes,
      });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export const createBike = async (req: Request, res: Response) => {
  const { error } = validateBike(req.body);
  if (error)
    return res
      .status(400)
      .json({ success: false, message: error.details[0].message });

  try {
    const newBike = new Bike(req.body);
    await newBike.save();
    res
      .status(201)
      .json({
        success: true,
        statusCode: 201,
        message: "Bike created successfully",
        data: newBike,
      });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export const updateBike = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { error } = validateBike(req.body);
  if (error)
    return res
      .status(400)
      .json({ success: false, message: error.details[0].message });

  try {
    const updatedBike = await Bike.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedBike)
      return res
        .status(404)
        .json({ success: false, message: "Bike not found" });

    res
      .status(200)
      .json({
        success: true,
        statusCode: 200,
        message: "Bike updated successfully",
        data: updatedBike,
      });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export const deleteBike = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const deletedBike = await Bike.findByIdAndDelete(id);
    if (!deletedBike)
      return res
        .status(404)
        .json({ success: false, message: "Bike not found" });

    res
      .status(200)
      .json({
        success: true,
        statusCode: 200,
        message: "Bike deleted successfully",
      });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
