import { Request, Response } from "express"
import httpStatus from "http-status"
import appointmentsService from "../services/appointments-service.js"
import { getErrorStatus } from "../errors/errors.js"

export async function appointmentPost(req: Request, res: Response) {
  const {  userid, scheduleid, status } = req.body

  try {
    const appointment = await appointmentsService.createAppointment(userid, scheduleid, status)
    res.send(appointment).status(httpStatus.CREATED)
  } catch (error) {
    return res.status(getErrorStatus(error)).send(error)
  }
}
