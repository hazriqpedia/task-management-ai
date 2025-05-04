import { NextFunction, Request, Response } from "express";
import { ObjectSchema } from "yup";

// export const validate =
//   (schema: ObjectSchema<any>) =>
//   async (req: Request, res: Response, next: NextFunction) => {
//     try {
//       req.body = await schema.validate(req.body);
//       return next();
//     } catch (error) {
//       return res.status(400).json({
//         isError: true,
//         error: error,
//       });
//     }
//   };

export const validate =
  (schema: ObjectSchema<any>) =>
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      console.log("req.body", req.body);
      req.body = await schema.validate(req.body, {
        abortEarly: false,
        stripUnknown: true,
      });
      return next();
    } catch (error: any) {
      res.status(400).json({
        isError: true,
        errors: error.errors,
      });
    }
  };
