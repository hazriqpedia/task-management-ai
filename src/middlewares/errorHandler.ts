import { ErrorRequestHandler } from "express";

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  if (err instanceof SyntaxError && "body" in err) {
    res.status(400).json({
      isError: true,
      message: "Invalid JSON payload",
    });
    return;
  }

  res.status(500).json({
    isError: true,
    message: "Internal Server Error",
  });
};
