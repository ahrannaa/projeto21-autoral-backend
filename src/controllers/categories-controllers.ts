import { Request, Response } from "express";
import httpStatus from "http-status";
import categoryService from "../services/categories-service.js";

export async function getCategories(req: Request, res: Response) {
   const { userId } = res.locals
  
  try {
    const company = await categoryService.findCategories(userId);
     res.send(company)
  } catch (error) {
    console.log(error)
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
};

export async function getCategoriesByIdWithService(req: Request, res: Response) {
  const { categoryId } = req.params
 
   try {
     const categories = await categoryService.findCategoriesWithService(Number(categoryId));
      res.send(categories)
   } catch (error) {
     console.log(error)
     return res.status(httpStatus.BAD_REQUEST).send(error);
   }
 };
 
