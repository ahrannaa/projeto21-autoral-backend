import userService from "../services/users-service.js";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function usersPost(req: Request, res: Response) {
  const { name, email, password, phone } = req.body;

  try {
    const user = await userService.createUser( name, email, password, phone );
     res.send(user).status(httpStatus.CREATED);
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}

export async function loginUser(req: Request, res: Response) {
  const { email, password  } = req.body;

  try {
    const user = await userService.loginUser( email, password );
     res.send(user).status(httpStatus.OK);
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}

