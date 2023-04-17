import { getCategories, getCategoriesByIdWithService } from "../controllers/categories-controllers.js";
import { Router } from "express";
import { authenticateToken } from "../middlewares/authentication-middleware.js";

const categoryRouter = Router();

categoryRouter.get("",authenticateToken, getCategories )
categoryRouter.get("/:categoryId/service",authenticateToken, getCategoriesByIdWithService )

export default categoryRouter ;