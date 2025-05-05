import { Router } from "express";
import { validate } from "../middlewares/validate";
import { createTaskSchema } from "../validators/task.schema";
import * as TaskController from "../controllers/task.controller";

const router = Router();

router.get("/", TaskController.getTasks);

router.post("/", validate(createTaskSchema), TaskController.createTask);

router.get("/health", (req, res) => {
  res.status(200).json({ message: "Task Router up..." });
});

router.delete("/:id", TaskController.deleteTask);

router.patch("/:id", TaskController.updateTask);

export default router;
