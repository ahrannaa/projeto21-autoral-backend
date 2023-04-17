import { Request, Response } from "express";
import httpStatus from "http-status";
import companyService from "../services/companies-service.js";

export async function getCompany(req: Request, res: Response) {
   const { userId } = res.locals
  try {
    const company = await companyService.findCompany(userId);
     res.send(company)
  } catch (error) {
    console.log(error)
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
};

export async function getCompanyById(req: Request, res: Response) {
 const { companyId } = req.params

  try {
    const company = await companyService.findCompanyWithService(Number(companyId));
     res.send(company)
  } catch (error) {
    console.log(error)
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
};

export async function getCompanyByIdWithCategories(req: Request, res: Response) {
  const { companyId } = req.params
 
   try {
     const company = await companyService.findCompanyWithCategories(Number(companyId));
      res.send(company)
   } catch (error) {
     console.log(error)
     return res.status(httpStatus.BAD_REQUEST).send(error);
   }
 };
 
