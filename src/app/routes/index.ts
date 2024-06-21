import { Router } from "express";
import { bikeRoutes } from "../modules/bike/bike.routes";
import { userRoutes } from "../modules/user/user.routes";

const router = Router();

const moduleRoutes = [
  {
    path: "/bikes",
    route: bikeRoutes,
  },
  {
    path: "/auth",
    route: userRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
