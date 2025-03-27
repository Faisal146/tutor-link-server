import { Types } from "mongoose";

export interface ITutor {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  educationLevel?: string;
  university?: string;
  major?: string;
  subjects: string[];
  experienceYears?: number;
  hourlyRate?: number;
  bio?: string;
  profile?: string;
  user: Types.ObjectId;
}
