import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import bodyPaser from "body-parser";
import router from "./app/routes";

const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());
app.use(bodyPaser.json());

// application routes

app.use("/api/v1", router);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Devs!");
});

export default app;
