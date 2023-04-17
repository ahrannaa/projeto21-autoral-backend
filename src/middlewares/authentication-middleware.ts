import prisma from "../database/database.js";
import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

export async function authenticateToken(req: Request, res: Response, next: NextFunction){
  const { authorization } = req.headers
  console.log(`authorization: ${authorization}` )
  const token = authorization?.replace("Bearer ", "")

  console.log(`token: ${token}`)
  if (!token) {
    res.status(httpStatus.UNAUTHORIZED).send("Não Autorizado token!");
    return
  }
  try {
    const session = await prisma.session.findFirst({
      where: { token: token},
    });
   
    if (!session) {
    res.status(httpStatus.UNAUTHORIZED).send("Não Autorizado session!");
    return
  }
   const userId = session.userid
   res.locals.userId = userId
  } catch (error) {
    res.status(httpStatus.UNAUTHORIZED).send("Não Autorizado!")
  }
   next()
 };