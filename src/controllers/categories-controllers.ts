import { Request, Response } from "express";
import httpStatus from "http-status";
import companyService from "../services/company-service.js";

export async function getCategories(req: Request, res: Response) {
   const { userId } = res.locals
  
  try {
    const company = await companyService.findCompany(userId);
     res.send(company)
  } catch (error) {
    console.log(error)
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}