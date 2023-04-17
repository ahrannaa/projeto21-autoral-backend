import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import usersRouter from "./routers/users-router.js";
import serviceRouter from "./routers/services-router.js";
import companyRouter from "./routers/companies-router.js";
import categoryRouter from "./routers/categories-router.js";
import scheduleRouter from "./routers/schedule-router.js";
import appointmentsRouter from "./routers/appointments-router.js";

dotenv.config()

const app = express();
app.use(cors());
app.use(express.json());
app.get("/health", (_req, res) => res.send("OK!"))
app.use("/users", usersRouter)
app.use("/services", serviceRouter)
app.use("/companies", companyRouter)
app.use("/categories", categoryRouter)
app.use("/schedule", scheduleRouter)
app.use("/appointments",appointmentsRouter)

const port = process.env.PORT || 4000
app.listen(port, () => console.log(`Server running in port ${port}`))

export default app;