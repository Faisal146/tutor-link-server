import { z } from "zod";

export const createTutorSchema = z.object({
  body: z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email("Invalid email"),
    phoneNumber: z.string().optional(),
    educationLevel: z.string().optional(),
    university: z.string().optional(),
    major: z.string().optional(),
    subjects: z.array(z.string()).min(1, "At least one subject is required"),
    experienceYears: z.number().optional(),
    hourlyRate: z.number().optional(),
    bio: z.string().optional(),
    resume: z.string().optional(),
    certificates: z.array(z.string()).optional(),
  }),
});

export const updateTutorSchema = createTutorSchema.partial();
