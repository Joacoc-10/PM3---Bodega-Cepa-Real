import { ICredential } from "../interfaces/CredentialInterface";
import bcrypt from "bcrypt";

const credentials: ICredential[] = [];

let identificador: number = 1;
const salt_rounds = 10;

export const createCredential = async (
  username: string,
  password: string
): Promise<number> => {
  if (checkUserExist(username)) {
    throw new Error(`El usuario con username: ${username} ya existe`);
  }
  const hashedPassword = await bcrypt.hash(password, salt_rounds);
  const newCredential: ICredential = {
    id: identificador,
    username: username,
    password: hashedPassword,
  };
  credentials.push(newCredential);
  identificador++;
  return newCredential.id;
};

const checkUserExist = (username: string): boolean => {
  const usernameFound: ICredential | undefined = credentials.find(
    (cred) => cred.username === username
  );
  return !!usernameFound;
};

export const checkUserCredentials = async (
  username: string,
  password: string
): Promise<number | undefined> => {
  const usernameFound: ICredential | undefined = credentials.find(
    (cred) => cred.username === username
  );
  if (!usernameFound) throw new Error("El usuario no existe");
  const isPasswordCorrect = await bcrypt.compare(
    password,
    usernameFound.password
  );
  if (isPasswordCorrect) {
    return usernameFound.id;
  } else {
    throw new Error("La contraseña es incorrecta");
  }
};
