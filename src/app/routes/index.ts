import { Router } from "express";
import { bikeRoutes } from "../modules/bike/bike.routes";

const router = Router();

const moduleRoutes = [
  {
    path: "/bikes",
    route: bikeRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
