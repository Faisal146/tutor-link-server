import { Schema, model, Document } from "mongoose";
import { IBooking } from "./booking.interface";

const bookingSchema = new Schema<IBooking & Document>(
  {
    userId: { type: Schema.Types.ObjectId, required: true, ref: "User" },
    tutorId: { type: Schema.Types.ObjectId, required: true, ref: "Tutor" },
    date: { type: Date, required: true },
    availability: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "TutorAvailability",
    },
    numberOfSession: { type: Number, default: 1 },
    paid: { type: Boolean, default: false },
    status: {
      type: String,
      enum: ["pending", "confirmed", "cancelled"],
      default: "pending",
    },
  },
  { timestamps: true }
);

export const Booking = model<IBooking>("Booking", bookingSchema);
