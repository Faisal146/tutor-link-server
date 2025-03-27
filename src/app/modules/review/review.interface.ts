import { Schema } from "mongoose";

export interface IReview {
  review: string;
  rating: number;
  user: Schema.Types.ObjectId;
  tutor: Schema.Types.ObjectId;
  isVerifiedPurchase?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
