import { getCompany, getCompanyById, getCompanyByIdWithCategories} from "../controllers/companies-controllers.js";
import { Router } from "express";
import { authenticateToken } from "../middlewares/authentication-middleware.js";

const companyRouter = Router();

companyRouter.get("",authenticateToken, getCompany )
companyRouter.get("/:companyId/", getCompanyById )
companyRouter.get("/:companyId/categories", getCompanyByIdWithCategories)

export default companyRouter ;