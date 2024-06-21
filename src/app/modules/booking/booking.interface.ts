import { Document } from "mongoose";

export interface IBooking extends Document {
  userId: string;
  bikeId: string;
  startTime: Date;
  returnTime: Date | null;
  totalCost: number;
  isReturned: boolean;
}
