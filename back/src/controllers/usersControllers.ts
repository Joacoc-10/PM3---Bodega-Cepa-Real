import { Request, Response } from "express";
import { UserDTO, UserLoginDTO, UserRegisterDTO } from "../dtos/UserDTO";
import {
  getUserByIdService,
  getUserService,
  registerUserService,
} from "../services/usersServices";
import { IUser } from "../interfaces/UserInterface";

export const getUsersController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const users: UserDTO[] = await getUserService();
    res.status(200).json({
      msg: "Obtener el listado de todos los usuarios",
      data: users,
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
    const userFound: UserDTO | undefined = await getUserByIdService(
      parseInt(req.params.id, 10)
    );
    res.status(200).json({
      msg: "Obtener el detalle de un usuario especifico",
      data: userFound,
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
    const newUser: IUser = await registerUserService(req.body);
    res.status(200).json({
      msg: "Registro un nuevo usuario",
      data: newUser,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Ocurrio un error",
      error: error instanceof Error ? error.message : "Error desconocido",
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
      error: error instanceof Error ? error.message : "Error desconocido",
    });
  }
};
