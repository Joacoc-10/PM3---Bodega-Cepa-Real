import { CustomError } from "./customError";

export const validationUserAge = (username: string, date: Date): void => {
  const today = new Date().getFullYear();
  const userBirth = new Date(date).getFullYear();
  const age = today - userBirth;
  if (userBirth > today)
    throw new CustomError(
      400,
      `El usuario ${username} no puede registrarse con una fecha de nacimiento del futoro`
    );
  if (age < 15)
    throw new CustomError(
      400,
      `El usuario con ${username} no puede registrarse siendo menor de 15 años`
    );
};
