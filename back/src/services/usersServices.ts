import { AppDataSource, UserModel } from "../config/data-source";
import { UserDTO, UserLoginDTO, UserRegisterDTO } from "../dtos/UserDTO";
import { Credential } from "../entities/Credential.entity";
import { User } from "../entities/User.entity";
import { validationUserAge } from "../utils/validationUserAge";
import { checkUserCredentials, createCredential } from "./credentialsServices";

export const getUserService = async (): Promise<UserDTO[]> => {
  const users: User[] = await UserModel.find();
  return users;
};

export const getUserByIdService = async (
  id: number
): Promise<UserDTO | undefined> => {
  const userFound: User | null = await UserModel.findOne({
    where: {
      id: id,
    },
    relations: ["appointments"],
  });
  if (!userFound) throw Error(`El usuario con el Id: ${id}, no fue encontrado`);
  return userFound;
};

export const registerUserService = async (
  user: UserRegisterDTO
): Promise<User> => {
  validationUserAge(user.name, user.birthdate);
  const resultadoTransaccion = await AppDataSource.transaction(
    async (entityManager) => {
      const credentialId: Credential = await createCredential(
        entityManager,
        user.username,
        user.password
      );
      const newUser = entityManager.create(User, {
        name: user.name,
        email: user.email,
        nDni: user.nDni,
        birthdate: new Date(user.birthdate),
        credentials: credentialId,
      });
      await entityManager.save(newUser);
      return newUser;
    }
  );
  return resultadoTransaccion;
};

export const loginUserService = async (
  userCredentials: UserLoginDTO
): Promise<User | null> => {
  const credential: Credential = await checkUserCredentials(
    userCredentials.username,
    userCredentials.password
  );

  const userFound: User | null = await UserModel.findOne({
    where: {
      credentials: {
        id: credential.id,
      },
    },
  });
  return userFound;
};
