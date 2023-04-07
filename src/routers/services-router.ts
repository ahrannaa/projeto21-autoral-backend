import { getServices } from "../controllers/services-controllers.js";
import { Router } from "express";

const serviceRouter = Router();

serviceRouter.get("/:categoryId", getServices )

export default  serviceRouter ;