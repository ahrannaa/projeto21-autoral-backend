import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import usersRouter from "./routers/users-router.js";
import serviceRouter from "./routers/services-router.js";
import companyRouter from "./routers/company-router.js";
import categoryRouter from "./routers/categories-router.js";
import scheduleRouter from "./routers/schedule-router.js";

dotenv.config()

const app = express();
app.use(cors());
app.use(express.json());
app.get("/health", (_req, res) => res.send("OK!"))
app.use("/users", usersRouter)
app.use("/service", serviceRouter)
app.use("/company", companyRouter)
app.use("/category", categoryRouter)
app.use("/schedule", scheduleRouter)

const port = process.env.PORT || 4000
app.listen(port, () => console.log(`Server running in port ${port}`))

export default app;