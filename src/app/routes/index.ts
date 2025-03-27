import { Router } from "express";
import { UserRoutes } from "../modules/user/user.routes";
import { AuthRoutes } from "../modules/auth/auth.routes";
import { SSLRoutes } from "../modules/sslcommerz/sslcommerz.routes";
import { ReviewRoutes } from "../modules/review/review.routes";
import { TutorRouter } from "../modules/tutor/tutor.routes";
import { BookingRouter } from "../modules/booking/booking.routes";
import { availabilityRouter } from "../modules/availability/availability.routes";
const router = Router();

const moduleRoutes = [
  {
    path: "/user",
    route: UserRoutes,
  },
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/tutors",
    route: TutorRouter,
  },
  {
    path: "/booking",
    route: BookingRouter,
  },
  {
    path: "/availability",
    route: availabilityRouter,
  },

  {
    path: "/ssl",
    route: SSLRoutes,
  },
  {
    path: "/review",
    route: ReviewRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
