import { IUser } from "../modules/user/user.interface";
import { Types } from "mongoose";

declare global {
  namespace Express {
    interface Request {
      user?: IUser;
    }
  }
}
declare module "mongoose" {
  export interface ObjectId extends Types.ObjectId {}
}
