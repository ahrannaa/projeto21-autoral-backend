import { getCompany, getCompanyById} from "../controllers/company-controllers.js";
import { Router } from "express";
import { authenticateToken } from "../middlewares/authentication-middleware.js";

const companyRouter = Router();

companyRouter.get("",authenticateToken, getCompany )
companyRouter.get("/:companyId", getCompanyById )

export default companyRouter ;