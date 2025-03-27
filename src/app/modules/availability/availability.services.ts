import { ITutorAvailability } from "./availability.interface";
import TutorAvailability from "./availability.model";

const createAvailability = async (data: ITutorAvailability) => {
  await checkForConflicts(data);
  const availability = new TutorAvailability(data);
  await availability.save();
  return availability;
};

const deleteAvailability = async (id: string) => {
  const availability = await TutorAvailability.findByIdAndDelete(id);
  if (!availability) throw new Error("Availability not found");

  // Example authorization check:

  return availability;
};

const checkForConflicts = async (data: ITutorAvailability) => {
  const conflict = await TutorAvailability.findOne({
    tutorId: data.tutorId,
    dayOfWeek: data.dayOfWeek,
    $or: [
      {
        startTime: { $lt: data.endTime },
        endTime: { $gt: data.startTime },
      },
    ],
  });

  if (conflict) {
    throw new Error("Time slot conflicts with existing availability");
  }
};

const getTutorAvailabilitys = async (id: string) => {
  const availabilitys = await TutorAvailability.find({ tutorId: id });
  return availabilitys;
};

export const availabilityServices = {
  createAvailability,
  deleteAvailability,
  getTutorAvailabilitys,
};
