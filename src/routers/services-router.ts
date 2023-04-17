import { getServicesWithSchedule } from "../controllers/services-controllers.js";
import { Router } from "express";
import { authenticateToken } from "../middlewares/authentication-middleware.js";

const serviceRouter = Router();

serviceRouter.get("/:serviceId/schedule",authenticateToken, getServicesWithSchedule )

export default  serviceRouter ;