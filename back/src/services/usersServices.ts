import { UserDTO, UserRegisterDTO } from "../dtos/UserDTO";
import { IUser } from "../interfaces/UserInterface";
import { createCredential } from "./credentialsServices";

const users: IUser[] = [];

let identificador: number = 1;

export const getUserService = async (): Promise<UserDTO[]> => {
  const nuevoArray = users.map((user) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
    };
  });

  return nuevoArray;
};

export const getUserByIdService = async (
  id: number
): Promise<UserDTO | undefined> => {
  const userFound = users.find((user) => user.id === id);
  if (!userFound) throw Error(`El usuario con el Id: ${id}, no fue encontrado`);
  return userFound;
};

export const registerUserService = async (user: UserRegisterDTO) => {
  const credentialId: number = await createCredential(
    user.username,
    user.password
  );
  const newUser: IUser = {
    id: identificador++,
    name: user.name,
    email: user.email,
    nDni: user.nDni,
    birthdate: new Date(user.birthdate),
    credentialsId: credentialId,
  };
  users.push(newUser);
  return newUser;
};
