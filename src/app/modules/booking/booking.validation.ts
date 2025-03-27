import { z } from "zod";

export const bookingSchema = z.object({
  body: z.object({
    userId: z.string(),
    tutorId: z.string(),
    date: z.string().refine((val) => !isNaN(Date.parse(val)), {
      message: "Invalid date format",
    }),
    availability: z.string(),
    numberOfSession: z.number().optional(),
    paid: z.boolean().optional(),
    status: z.enum(["pending", "confirmed", "cancelled"]).optional(),
  }),
});
