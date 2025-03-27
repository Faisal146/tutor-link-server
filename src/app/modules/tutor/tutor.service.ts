import mongoose from "mongoose";
import { ITutor } from "./tutor.interface";
import Tutor from "./tutor.model";
import AppError from "../../errors/appError";
import { StatusCodes } from "http-status-codes";
import { IJwtPayload } from "../auth/auth.interface";
import User from "../user/user.model";
import { IImageFile } from "../../interface/IImageFile";
import QueryBuilder from "../../builder/QueryBuilder";

const createTutor = async (
  data: ITutor,
  authUser: IJwtPayload,
  image: IImageFile
) => {
  const session = await mongoose.startSession();
  try {
    session.startTransaction();

    // Check if the tutor already exists by email
    const existingTutor = await Tutor.findOne({ email: data.email }).session(
      session
    );
    if (existingTutor) {
      throw new AppError(
        StatusCodes.NOT_ACCEPTABLE,
        "Email is already registered"
      );
    }

    //updating user Role to tutor

    const UpdatedUser = await User.findOneAndUpdate(
      { email: authUser.email },
      { role: "tutor" },
      { new: true, session }
    );

    console.log(UpdatedUser);

    data.user = UpdatedUser!._id as any;
    if (image) {
      data.profile = image.path;
    }

    const tutor = new Tutor(data);
    await tutor.save({ session });

    await session.commitTransaction();
    return tutor;
  } catch (error) {
    if (session.inTransaction()) {
      await session.abortTransaction();
    }
    throw error;
  } finally {
    session.endSession();
  }
};

const updateTutor = async (id: string, data: Partial<ITutor>) => {
  const tutor = await Tutor.findByIdAndUpdate(id, data, { new: true });
  if (!tutor) throw new Error("Tutor not found");
  return tutor;
};

const getSingleTutor = async (id: string) => {
  const tutor = await Tutor.findById(id);
  if (!tutor) throw new Error("Tutor not found");
  return tutor;
};

const getTutorFromUser = async (id: string) => {
  const tutor = await Tutor.findOne({ user: id });
  if (!tutor) throw new Error("Tutor not found");
  return tutor;
};

const getAllTutor = async (query: Record<string, unknown>) => {
  const SearchableFields = [
    "firstName",
    "lastName",
    "email",
    "phoneNumber",
    "educationLevel",
    "university",
    "major",
    "subjects",
    "experienceYears",
    "hourlyRate",
    "bio",
  ];
  const tutorQuery = new QueryBuilder(Tutor.find(), query)
    .search(SearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await tutorQuery.modelQuery;
  const meta = await tutorQuery.countTotal();
  return {
    result,
    meta,
  };
};

export const tutorServices = {
  createTutor,
  updateTutor,
  getAllTutor,
  getSingleTutor,
  getTutorFromUser,
};
