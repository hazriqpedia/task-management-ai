import express from "express";
import dotenv from "dotenv";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "App is alive" });
});

export default app;
