import { Booking } from "./booking.model";
import { IBooking } from "./booking.interface";

const getTutorBooking = async (id: string) => {
  console.log(id);
  const booking = await Booking.find({ tutorId: id })
    .populate("availability")
    .populate("userId");

  return booking;
};

const getUserBooking = async (id: string) => {
  console.log(id);
  const booking = await Booking.find({ userId: id })
    .populate("availability")
    .populate("userId")
    .populate("tutorId");

  return booking;
};

const createBooking = async (data: IBooking) => {
  const booking = new Booking(data);
  return await booking.save();
};

const updateBookingStatus = async (id: string, data: { value: string }) => {
  const updetedStatus = await Booking.findByIdAndUpdate(id, {
    status: data.value,
  });
  return updateBookingStatus;
};

const deleteBooking = async (id: string) => {
  const booking = await Booking.findByIdAndDelete(id);
  if (!booking) {
    throw new Error("Booking not found");
  }
  return booking;
};

export const bookingServices = {
  createBooking,
  deleteBooking,
  getTutorBooking,
  getUserBooking,
  updateBookingStatus,
};
