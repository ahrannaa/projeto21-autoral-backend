import serviceService from "../services/services-service.js";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function getServicesWithSchedule(req: Request, res: Response) {
  const { serviceId } = req.params;

  try {
    const services = await serviceService.findServicesWithSchedule( Number(serviceId) );
     res.send(services)
  } catch (error) {
    console.log(error)
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
};
