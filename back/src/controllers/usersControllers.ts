import { Request, Response } from "express";
import { UserLoginDTO, UserRegisterDTO } from "../dtos/UserDTO";

export const getUsersController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    res.status(200).json({
      msg: "Obtener el listado de todos los usuarios",
      data: [],
    });
  } catch (error) {
    res.status(500).json({
      msg: "Ocurrio un error",
      error: error instanceof Error ? error.message : "Error desconocido",
    });
  }
};

export const getUserByIdController = async (
  req: Request<{ id: string }>,
  res: Response
): Promise<void> => {
  try {
    res.status(200).json({
      msg: "Obtener el detalle de un usuario especifico",
      data: req.params.id,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Ocurrio un error",
      error: error instanceof Error ? error.message : "Error desconocido",
    });
  }
};

export const registerUserController = async (
  req: Request<unknown, unknown, UserRegisterDTO>,
  res: Response
): Promise<void> => {
  try {
    res.status(200).json({
      msg: "Registro un nuevo usuario",
      data: req.body,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Ocurrio un error",
      error: error,
    });
  }
};

export const loginUserController = async (
  req: Request<unknown, unknown, UserLoginDTO>,
  res: Response
): Promise<void> => {
  try {
    res.status(200).json({
      msg: "Login del usuario a la aplicacion",
      data: req.body,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Ocurrio un error",
      error: error,
    });
  }
};
