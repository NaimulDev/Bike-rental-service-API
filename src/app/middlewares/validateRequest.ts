// import { NextFunction, Request, Response } from "express";
// import { AnyZodObject } from "zod";

// const validateRequest = (schema: AnyZodObject) => {
//   return async (req: Request, res: Response, next: NextFunction) => {
//     try {
//       await schema.parseAsync({
//         body: req.body,
//       });
//       next();
//     } catch (err) {
//       next(err);
//     }
//   };
// };

// export default validateRequest;

import { NextFunction, Request, Response } from "express";
import { AnyZodObject, ZodError } from "zod";

const validateRequest = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log("Validating request body:", req.body);
      await schema.parseAsync(req.body);
      next();
    } catch (err) {
      if (err instanceof ZodError) {
        const errors = err.errors.map((e) => ({
          path: e.path.join("."),
          message: e.message,
        }));
        console.log("Validation errors:", errors);
        return res.status(400).json({
          success: false,
          message: "Validation Error",
          errors,
        });
      }
      next(err);
    }
  };
};

export default validateRequest;
