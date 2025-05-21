import { EntityManager } from "typeorm";
import { CredentialModel } from "../config/data-source";
import { Credential } from "../entities/Credential.entity";
import bcrypt from "bcrypt";

const salt_rounds = 10;

export const createCredential = async (
  entityManager: EntityManager,
  username: string,
  password: string
): Promise<Credential> => {
  await checkUserExist(username);
  const hashedPassword = await bcrypt.hash(password, salt_rounds);

  const newCredential = entityManager.create(Credential, {
    username,
    password: hashedPassword,
  });

  const credentialSave = await entityManager.save(newCredential);
  return credentialSave;
};

const checkUserExist = async (username: string): Promise<void> => {
  const usernameFound: Credential | null = await CredentialModel.findOne({
    where: { username },
  });
  if (usernameFound)
    throw Error(`El usuario con username ${username} ya existe`);
};

export const checkUserCredentials = async (
  username: string,
  password: string
): Promise<Credential> => {
  const credentialFound: Credential | null = await CredentialModel.findOne({
    where: { username },
  });
  if (!credentialFound) throw new Error("El usuario no existe");
  const isPasswordCorrect = await bcrypt.compare(
    password,
    credentialFound.password
  );
  if (isPasswordCorrect) {
    return credentialFound;
  } else {
    throw new Error("La contraseña es incorrecta");
  }
};
