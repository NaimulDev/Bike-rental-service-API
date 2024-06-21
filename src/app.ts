import express, { Application, Request, Response } from "express";
import cors from "cors";
import router from "./app/routes";
import notFound from "./app/middlewares/notFound";
import globalErrorHander from "./app/middlewares/globalErrorHandler";
import { UserMiddleware } from "./app/middlewares/authMiddleware";
import bodyParser from "body-parser";

const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use("/api/v1", router);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Devs!");
});

// Custom middlewares
app.use(notFound);
app.use(globalErrorHander);
app.use(UserMiddleware.authMiddleware);
app.use(UserMiddleware.adminMiddleware);

export default app;
