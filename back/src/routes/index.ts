import { Router } from "express";
import userRouter from "./userRouter";
import appointmentsRouter from "./appointmentsRouter";

const router: Router = Router();

console.log("🛠️ Montando /users");
router.use("/users", userRouter);

console.log("🛠️ Montando /appointments");
router.use("/appointments", appointmentsRouter);

export default router;
