import { Request, Response } from "express";
import { AppointmentRegisterDTO } from "../dtos/AppointmentsDTO";

export const getAppointmentsController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    res.status(200).json({
      msg: "Obtener el listado de todos los turnos de todos los usuarios",
      data: [],
    });
  } catch (error) {
    res.status(500).json({
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
    res.status(200).json({
      msg: "Obtener el detalle de un turno especifico",
      data: req.params.id,
    });
  } catch (error) {
    res.status(500).json({
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
    res.status(200).json({
      msg: "Agendar un nuevo turno",
      data: req.body,
    });
  } catch (error) {
    res.status(500).json({
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
    res.status(200).json({
      msg: "Cambiar el estatus de un turno a cancelled",
      data: req.params.id,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Ocurrio un error",
      error: error instanceof Error ? error.message : "Error desconocido",
    });
  }
};
