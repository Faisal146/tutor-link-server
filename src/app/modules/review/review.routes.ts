import { Router } from "express";
import { ReviewControllers } from "./review.controller";
import auth from "../../middleware/auth";
import { UserRole } from "../user/user.interface";

const router = Router();

router.get("/:id", ReviewControllers.getTutorReviews);
router.post(
  "/",
  auth(UserRole.USER, UserRole.TUTOR, UserRole.ADMIN),
  ReviewControllers.createReview
);
router.delete(
  "/",
  auth(UserRole.USER, UserRole.TUTOR, UserRole.ADMIN),
  ReviewControllers.deleteReview
);

export const ReviewRoutes = router;
