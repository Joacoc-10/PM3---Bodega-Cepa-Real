import { Router, Request, Response } from "express";
import { AppointmentRegisterDTO } from "../dtos/AppointmentsDTO";
import {
  cancelStatusAppointmentsController,
  getAppointmentByIdController,
  getAppointmentsController,
  registerAppointmentsController,
} from "../controllers/appointmentsControllers";

const appointmentsRouter: Router = Router();

appointmentsRouter.get("/", (req: Request, res: Response) =>
  getAppointmentsController(req, res)
);
appointmentsRouter.get("/:id", (req: Request<{ id: string }>, res: Response) =>
  getAppointmentByIdController(req, res)
);
appointmentsRouter.post(
  "/schedule",
  (req: Request<unknown, unknown, AppointmentRegisterDTO>, res: Response) =>
    registerAppointmentsController(req, res)
);
appointmentsRouter.put(
  "/cancel/:id",
  (req: Request<{ id: string }>, res: Response) =>
    cancelStatusAppointmentsController(req, res)
);

export default appointmentsRouter;
