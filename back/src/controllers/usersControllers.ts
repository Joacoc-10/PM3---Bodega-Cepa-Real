import { Request, Response } from "express";
import { UserDTO, UserLoginDTO, UserRegisterDTO } from "../dtos/UserDTO";
import {
  getUserByIdService,
  getUserService,
  loginUserService,
  registerUserService,
} from "../services/usersServices";
import { User } from "../entities/User.entity";
import { PostgresErorr } from "../interfaces/PostgreErrorInterface";

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
    res.status(404).json({
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
    const newUser: User = await registerUserService(req.body);
    res.status(201).json({
      msg: "Registro un nuevo usuario",
      data: newUser,
    });
  } catch (error) {
    const err = error as PostgresErorr;

    res.status(400).json({
      msg: "Ocurrio un error",
      error:
        error instanceof Error
          ? err.detail
            ? err.detail
            : err.message
          : "Error desconocido",
    });
  }
};

export const loginUserController = async (
  req: Request<unknown, unknown, UserLoginDTO>,
  res: Response
): Promise<void> => {
  try {
    const user: User | null = await loginUserService(req.body);
    res.status(200).json({
      msg: "Login del usuario a la aplicacion",
      login: true,
      user: user,
    });
  } catch (error) {
    res.status(400).json({
      msg: "Ocurrio un error",
      error: error instanceof Error ? error.message : "Error desconocido",
    });
  }
};
