import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { bookingServices } from "./booking.services";

const getTutorBooking = catchAsync(async (req, res) => {
  const booking = await bookingServices.getTutorBooking(req.params.id);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Tutor booking retrived successfully!",
    data: booking,
  });
});

const getUserBooking = catchAsync(async (req, res) => {
  const booking = await bookingServices.getUserBooking(req.params.id);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "User bookings retrived successfully!",
    data: booking,
  });
});

const createBooking = catchAsync(async (req, res) => {
  const booking = await bookingServices.createBooking(req.body);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: "Tutor booked successfully!",
    data: booking,
  });
});

const updateBookingStatus = catchAsync(async (req, res) => {
  const booking = await bookingServices.updateBookingStatus(
    req.params.id,
    req.body
  );
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: "Booking status updated successfully!",
    data: booking,
  });
});

const deleteBooking = catchAsync(async (req, res) => {
  const booking = await bookingServices.deleteBooking(req.params.id);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: "Booking deleted successfully!",
    data: booking,
  });
});

export const bookingController = {
  createBooking,
  deleteBooking,
  getTutorBooking,
  getUserBooking,
  updateBookingStatus,
};
