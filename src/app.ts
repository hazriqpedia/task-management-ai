import express from "express";
import dotenv from "dotenv";
import taskRouter from "./routes/task.routes";
import { errorHandler } from "./middlewares/errorHandler";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "App is alive" });
});

app.use("/task", taskRouter);
app.use(errorHandler);

export default app;
