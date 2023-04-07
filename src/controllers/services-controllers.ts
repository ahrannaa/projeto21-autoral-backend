import serviceService from "../services/services-service.js";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function getServices(req: Request, res: Response) {
  const { categoryId } = req.params;

  try {
    const services = await serviceService.findServicesWithCategoryId( Number(categoryId) );
     res.send(services)
  } catch (error) {
    console.log(error)
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}
