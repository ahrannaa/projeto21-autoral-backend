import { getCategories } from "../controllers/categories-controllers.js";
import { Router } from "express";
import { authenticateToken } from "../middlewares/authentication-middleware.js";

const categoryRouter = Router();

categoryRouter.get("",authenticateToken, getCategories )

export default categoryRouter ;