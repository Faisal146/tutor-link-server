import { Request, Response } from "express";
import { createTutorSchema, updateTutorSchema } from "./tutor.validation";
import { tutorServices } from "./tutor.service";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { StatusCodes } from "http-status-codes";
import { IJwtPayload } from "../auth/auth.interface";
import { IImageFile } from "../../interface/IImageFile";

const createTutor = catchAsync(async (req: Request, res: Response) => {
  const tutor = await tutorServices.createTutor(
    req.body,
    req.user as IJwtPayload,
    req.file as IImageFile
  );
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: "Tutor Profile registration completed successfully!",
    data: tutor,
  });
});

const updateTutor = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const tutor = await tutorServices.updateTutor(id, req.body);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: "Tutor Profile update completed successfully!",
    data: tutor,
  });
});

const getAllTutor = catchAsync(async (req: Request, res: Response) => {
  const tutor = await tutorServices.getAllTutor(req.query);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: "all Tutors retrived successfully!",
    data: tutor,
  });
});

const getSingleTutor = catchAsync(async (req: Request, res: Response) => {
  const tutor = await tutorServices.getSingleTutor(req.params.id);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: " Tutor retrived successfully!",
    data: tutor,
  });
});

const getTutorFromUser = catchAsync(async (req: Request, res: Response) => {
  const tutor = await tutorServices.getTutorFromUser(req.params.id);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: " Tutor from user retrived successfully!",
    data: tutor,
  });
});

export const TutorController = {
  createTutor,
  updateTutor,
  getAllTutor,
  getSingleTutor,
  getTutorFromUser,
};
