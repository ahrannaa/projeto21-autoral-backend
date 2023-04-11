import prisma from "../database/database.js";
import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

export async function authenticateToken(req: Request, res: Response, next: NextFunction){
  const { authorization } = req.headers
  const token = authorization?.replace("Bearer ", "")
  //console.log(token)
  if (!token) {
    res.status(httpStatus.UNAUTHORIZED).send("Não Autorizado token!");
    return
  }
  try {
    const session = await prisma.session.findFirst({
      where: { token: "dadacd74-f01a-4cbb-aa17-592a7a2e79aa"},
    });

    console.log(token)
    console.log(session)
   
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