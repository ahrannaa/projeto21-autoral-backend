import { loginUser, usersPost } from "../controllers/users-controllers.js"
import { Router } from "express"
import { validateBody, validateSignIn } from "../middlewares/validation-middlewares.js"

const usersRouter = Router()

usersRouter.post("/sign-up", validateBody, usersPost)
usersRouter.post("/sign-in", validateSignIn, loginUser)

export default usersRouter