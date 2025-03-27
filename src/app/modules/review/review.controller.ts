import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { reviewServices } from "./review.service";
import { IJwtPayload } from "../auth/auth.interface";

const createReview = catchAsync(async (req, res) => {
  const user = req.user as IJwtPayload;
  const review = req.body;
  const result = await reviewServices.createReview(review, user);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Review created successfully",
    data: result,
  });
});

const getTutorReviews = catchAsync(async (req, res) => {
  const result = await reviewServices.getTutorReviews(req.params.id);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "tutur reviews retrived successfully",
    data: result,
  });
});
const deleteReview = catchAsync(async (req, res) => {
  const result = await reviewServices.deleteReview(req.params.id);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "review deleted successfully",
    data: result,
  });
});
// const getAllReviews = catchAsync(async (req, res) => {
//    const result = await reviewServices.getAllReviews(req.query);

//    sendResponse(res, {
//       statusCode: StatusCodes.OK,
//       success: true,
//       message: 'Review fetched successfully',
//       data: result,
//    });
// });

export const ReviewControllers = {
  createReview,
  getTutorReviews,
  deleteReview,
  // getAllReviews,
};
