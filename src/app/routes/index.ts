import { Router } from "express";
import { bikeRoutes } from "../modules/bike/bike.routes";
import { userRoutes } from "../modules/user/user.routes";
import { authRoutes } from "../modules/Auth/auth.routes";
import { bookingRoutes } from "../modules/booking/booking.routes";

const router = Router();

const moduleRoutes = [
  {
    path: "/bikes",
    route: bikeRoutes,
  },
  {
    path: "/auth",
    route: authRoutes,
  },
  {
    path: "/users",
    route: userRoutes,
  },
  {
    path: "/rentals",
    route: bookingRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
