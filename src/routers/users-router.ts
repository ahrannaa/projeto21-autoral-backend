import { Router } from "express";
import { validateBody } from "../middlewares/validation-middlewares.js";
import { createUserSchema } from "../schemas/users-schemas.js";


const usersRouter = Router();

usersRouter.post("/sign up", validateBody(createUserSchema) )

export default  usersRouter ;