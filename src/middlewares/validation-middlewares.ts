import { NextFunction, Request, Response } from "express";
import { createUserSchema } from "../schemas/users-schemas.js";

export async function validateBody (req: Request, res: Response, next: NextFunction) {
  const { name, email, password, phone  } = req.body

  const validation = createUserSchema.validate({ name, email, password, phone}, { abortEarly: false })

  if (validation.error) {
      const erros = validation.error.details.map((detail) => detail.message)
      res.status(400).send(erros)
      return;
  }

  next()
}