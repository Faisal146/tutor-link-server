import { Schema, Types } from "mongoose";
import { IJwtPayload } from "../auth/auth.interface";
import User from "../user/user.model";
import { IReview } from "./review.interface";
import { Review } from "./review.model";

const createReview = async (
  data: IReview,

  authUser: IJwtPayload
) => {
  const user = await User.findOne({ email: authUser.email });

  if (!user) {
    throw new Error("User not found");
  }

  const existingReview = await Review.findOne({
    $and: [{ user: user._id }, { tutor: data.tutor }],
  });

  if (existingReview) {
    throw new Error("You have already reviewed this tutor");
  }
  data.user = user._id as Schema.Types.ObjectId;
  data.isVerifiedPurchase = false;

  const review = await Review.create(data);

  return review;
};

const getTutorReviews = async (id: string) => {
  const review = await Review.find({ tutor: id }).populate("user");
  if (!review) {
    throw new Error("Review not found");
  }
  return review;
};
const deleteReview = async (id: string) => {
  const review = await Review.findByIdAndDelete(id);
  if (!review) {
    throw new Error("Review not found");
  }
  return review;
};

export const reviewServices = {
  createReview,
  getTutorReviews,
  deleteReview,
};
