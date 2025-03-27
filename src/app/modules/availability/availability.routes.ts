import express from "express";
import auth from "../../middleware/auth";
import { UserRole } from "../user/user.interface";
import validateRequest from "../../middleware/validateRequest";
import { createAvailabilitySchema } from "./availability.validation";
import { availabilityController } from "./availability.controller";

const router = express.Router();

router.post(
  "/",
  auth(UserRole.TUTOR),
  validateRequest(createAvailabilitySchema),
  availabilityController.createAvailability
);
router.delete(
  "/:id",
  auth(UserRole.TUTOR),
  availabilityController.deleteAvailability
);

router.get("/:id", availabilityController.getTutorAvailabilitys);

export const availabilityRouter = router;
