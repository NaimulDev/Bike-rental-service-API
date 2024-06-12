import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import bodyPaser from "body-parser";

const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());
app.use(bodyPaser.json());
// api/v1/students

// application routes
// app.use("/api/v1/students", StudentRoutes);
app.use("/api/v1");

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Devs!");
});

export default app;