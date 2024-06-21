import { Document, Types } from "mongoose";

export interface IBooking extends Document {
  userId: Types.ObjectId;
  bikeId: Types.ObjectId;
  startTime: Date;
  returnTime?: Date | null;
  totalCost: number;
  isReturned: boolean;
}
