import { Types } from "mongoose";

export interface ITutorAvailability {
  tutorId: Types.ObjectId;
  dayOfWeek: string; // E.g., 'Monday', 'Tuesday'
  startTime: string; // E.g., '14:00' (24-hour format)
  endTime: string; // E.g., '16:00'
  isRecurring?: boolean;
  maxSessions?: number;
}
