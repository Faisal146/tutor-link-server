import { Schema, model, Document } from "mongoose";
import { IStudent } from "./student.interface";

const studentSchema = new Schema<IStudent>(
  {
    phoneNo: {
      type: String,
      validate: {
        validator: function (v: string) {
          return /^\d{11}$/.test(v);
        },
        message: "Phone number must be 11 digits long",
      },
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      default: "Other",
    },
    dateOfBirth: {
      type: String,
    },
    address: {
      type: String,
    },
    photo: {
      type: String,
      validate: {
        validator: function (v: string) {
          return /^(http(s)?:\/\/.*\.(?:png|jpg|jpeg))/.test(v);
        },
        message: "Invalid photo URL format.",
      },
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const Student = model<IStudent>("Student", studentSchema);

export default Student;
