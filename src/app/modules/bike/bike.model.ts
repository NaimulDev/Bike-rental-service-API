import mongoose, { Document, Schema } from "mongoose";
import { IBike } from "./bike.interface";

const BikeSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    pricePerHour: { type: Number, required: true },
    isAvailable: { type: Boolean, default: true },
    cc: { type: Number, required: true },
    year: { type: Number, required: true },
    model: { type: String, required: true },
    brand: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model<IBike>("Bike", BikeSchema);
