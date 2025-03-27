import { Router } from "express";
import { bookingSchema } from "./booking.validation";
import { bookingController } from "./booking.controller";
import auth from "../../middleware/auth";
import validateRequest from "../../middleware/validateRequest";
import { UserRole } from "../user/user.interface";

const router = Router();

router.get("/:id", auth(UserRole.TUTOR), bookingController.getTutorBooking);

router.get("/user/:id", bookingController.getUserBooking);

router.post(
  "/",
  auth(UserRole.TUTOR),
  validateRequest(bookingSchema),
  bookingController.createBooking
);

router.post(
  "/status-update/:id",
  auth(UserRole.TUTOR),
  bookingController.updateBookingStatus
);

router.delete("/:id", auth(UserRole.TUTOR), bookingController.deleteBooking);

export const BookingRouter = router;
