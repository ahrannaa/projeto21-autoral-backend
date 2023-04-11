import { Request, Response } from "express";
import httpStatus from "http-status";
import scheduleService from "../services/schedule-service.js";

export async function getSchedule(req: Request, res: Response) {
  const { userId } = res.locals;

  try {
    const schedule = await scheduleService.getSchedule(userId);
     res.send(schedule)
  } catch (error) {
    console.log(error)
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
};

export async function  getScheduleByServiceId(req: Request, res: Response) {
  const { serviceId } = req.params;

  try {
    const schedule = await scheduleService.findScheduleWithService(Number(serviceId));
     res.send(schedule)
  } catch (error) {
    console.log(error)
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
};