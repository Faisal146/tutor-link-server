import { z } from "zod";

export const reviewSchema = z.object({
  review: z.string().min(1, "Review cannot be empty"), // Ensures the review is not empty
  rating: z.number().min(1).max(5), // Rating between 1 and 5
});
