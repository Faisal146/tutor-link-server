import mongoose, { Schema } from "mongoose";
import { ITutor } from "./tutor.interface";

const tutorSchema = new Schema<ITutor>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: String },
    educationLevel: { type: String },
    university: { type: String },
    major: { type: String },
    subjects: [{ type: String, required: true }],
    experienceYears: { type: Number },
    hourlyRate: { type: Number },
    bio: { type: String },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    profile: { type: String, default: "" },
  },
  { timestamps: true }
);

const Tutor = mongoose.model<ITutor>("Tutor", tutorSchema);

export default Tutor;
