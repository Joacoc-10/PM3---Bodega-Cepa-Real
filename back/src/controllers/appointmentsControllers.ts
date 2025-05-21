import { Request, Response } from "express";
import { AppointmentRegisterDTO } from "../dtos/AppointmentsDTO";
import {
  cancelAppointemtnsService,
  getAppointementByIdService,
  getAppointmentService,
  registerAppointmentService,
} from "../services/appointmentService";
import { Appointment } from "../entities/Appointment.entity";

export const getAppointmentsController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const appointments: Appointment[] = await getAppointmentService();
    res.status(200).json({
      msg: "Obtener el listado de todos los turnos de todos los usuarios",
      data: appointments,
    });
  } catch (error) {
    res.status(404).json({
      msg: "Ocurrio un error",
      error: error instanceof Error ? error.message : "Error desconocido",
    });
  }
};

export const getAppointmentByIdController = async (
  req: Request<{ id: string }>,
  res: Response
): Promise<void> => {
  try {
    const id = parseInt(req.params.id, 10);
    const appointmentFound: Appointment = await getAppointementByIdService(id);
    res.status(200).json({
      msg: "Obtener el detalle de un turno especifico",
      data: appointmentFound,
    });
  } catch (error) {
    res.status(404).json({
      msg: "Ocurrio un error",
      error: error instanceof Error ? error.message : "Error desconocido",
    });
  }
};

export const registerAppointmentsController = async (
  req: Request<unknown, unknown, AppointmentRegisterDTO>,
  res: Response
): Promise<void> => {
  try {
    const appointmentCreate: Appointment = await registerAppointmentService(
      req.body
    );
    res.status(201).json({
      msg: "Agendar un nuevo turno",
      data: appointmentCreate,
    });
  } catch (error) {
    res.status(400).json({
      msg: "Ocurrio un error",
      error: error instanceof Error ? error.message : "Error desconocido",
    });
  }
};

export const cancelStatusAppointmentsController = async (
  req: Request<{ id: string }>,
  res: Response
): Promise<void> => {
  try {
    await cancelAppointemtnsService(parseInt(req.params.id, 10));
    res.status(200).json({
      msg: "Cita cancelada",
    });
  } catch (error) {
    res.status(404).json({
      msg: "Ocurrio un error",
      error: error instanceof Error ? error.message : "Error desconocido",
    });
  }
};
