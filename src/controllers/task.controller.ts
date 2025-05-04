import { Request, Response } from "express";
import { Task } from "../models/task.model";

export const createTask = async (req: Request, res: Response) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({
      id: task._id,
      title: task.title,
      description: task.description,
      isDone: task.isDone,
      createdAt: task.createdAt,
    });
  } catch (error) {
    res.status(500).json({ isError: true, error });
  }
};

export const getTasks = async (req: Request, res: Response) => {
  const tasks = await Task.find();
  res.status(200).json({ result: tasks });
};

export const deleteTask = async (req: Request, res: Response) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      res.status(404).json({ isError: true, error: "Task not found" });
      return;
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Failed to delete task" });
  }
};
