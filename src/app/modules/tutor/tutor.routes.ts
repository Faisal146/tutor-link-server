import express from "express";
import validateRequest from "../../middleware/validateRequest";
import { createTutorSchema, updateTutorSchema } from "./tutor.validation";
import { TutorController } from "./tutor.controller";
import auth from "../../middleware/auth";
import { UserRole } from "../user/user.interface";
import { multerUpload } from "../../config/multer.config";
import { parseBody } from "../../middleware/bodyParser";

const router = express.Router();

router.get("/", TutorController.getAllTutor);
router.get("/:id", TutorController.getSingleTutor);
router.get("/from-user/:id", TutorController.getTutorFromUser);

router.post(
  "/",
  auth(UserRole.USER),
  multerUpload.single("image"),
  parseBody,
  validateRequest(createTutorSchema),
  TutorController.createTutor
);
router.put(
  "/:id",
  auth(UserRole.TUTOR),
  validateRequest(updateTutorSchema),
  TutorController.updateTutor
);

export const TutorRouter = router;
