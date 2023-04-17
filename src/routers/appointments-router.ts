//import { getAppointments, getAppointmentByServiceId, postAppointment } from "../controllers/schedule-controllers.js"
import { appointmentPost } from "../controllers/appointment-controllers.js";
import { Router } from "express";
import { authenticateToken } from "../middlewares/authentication-middleware.js";

const appointmentsRouter = Router();

//appointmentsRouter.get("",authenticateToken, getAppointments )
//appointmentsRouter.get("/:serviceId",authenticateToken, getAppointmentByServiceId )
appointmentsRouter.post("",authenticateToken, appointmentPost)


export default appointmentsRouter;