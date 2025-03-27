import { z } from "zod";

export const createAvailabilitySchema = z.object({
  body: z.object({
    tutorId: z.string().min(1, "Tutor ID is required"),
    dayOfWeek: z.enum([
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ]),
    startTime: z
      .string()
      .regex(/^([01]\d|2[0-3]):([0-5]\d)$/, "Invalid time format (HH:MM)"),
    endTime: z
      .string()
      .regex(/^([01]\d|2[0-3]):([0-5]\d)$/, "Invalid time format (HH:MM)"),
    isRecurring: z.boolean().optional(),
    maxSessions: z.number().optional(),
  }),
});
