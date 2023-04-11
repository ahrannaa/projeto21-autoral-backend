import { getSchedule, getScheduleByServiceId } from "../controllers/schedule-controllers.js"
import { Router } from "express";
import { authenticateToken } from "../middlewares/authentication-middleware.js";

const scheduleRouter = Router();

scheduleRouter.get("",authenticateToken, getSchedule )
scheduleRouter.get("/:serviceId",authenticateToken, getScheduleByServiceId )


export default  scheduleRouter ;