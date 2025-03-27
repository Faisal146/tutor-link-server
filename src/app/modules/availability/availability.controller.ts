import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { availabilityServices } from "./availability.services";
import { createAvailabilitySchema } from "./availability.validation";

const createAvailability = catchAsync(async (req, res) => {
  const availability = await availabilityServices.createAvailability(req.body);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: "Availability created successfully!",
    data: availability,
  });
});

const deleteAvailability = catchAsync(async (req, res) => {
  const availability = await availabilityServices.deleteAvailability(
    req.params.id
  );

  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: "Availability deleted successfully!",
    data: availability,
  });
});

const getTutorAvailabilitys = catchAsync(async (req, res) => {
  const availability = await availabilityServices.getTutorAvailabilitys(
    req.params.id
  );

  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: "Tutor Availability retrived successfully!",
    data: availability,
  });
});

export const availabilityController = {
  deleteAvailability,
  createAvailability,
  getTutorAvailabilitys,
};
