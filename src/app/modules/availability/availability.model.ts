import mongoose, { Schema } from "mongoose";
import { ITutorAvailability } from "./availability.interface";

const tutorAvailabilitySchema = new Schema<ITutorAvailability>(
  {
    tutorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tutor",
      required: true,
    },
    dayOfWeek: { type: String, required: true },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
    isRecurring: { type: Boolean, default: true },
    maxSessions: { type: Number, default: 1 },
  },
  { timestamps: true }
);

const TutorAvailability = mongoose.model<ITutorAvailability>(
  "TutorAvailability",
  tutorAvailabilitySchema
);

export default TutorAvailability;
