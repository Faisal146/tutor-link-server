import { Types } from "mongoose";

export interface IBooking {
  id?: string;
  userId: Types.ObjectId;
  tutorId: Types.ObjectId;
  availability: Types.ObjectId;
  numberOfSession: number;
  paid: boolean;
  date: Date;
  status: "pending" | "confirmed" | "cancelled";
}
