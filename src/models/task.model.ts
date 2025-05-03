import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  isDone: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

export const Task = mongoose.model("Task", taskSchema);
