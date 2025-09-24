import { DataSource, Repository } from "typeorm";
import { config } from "./envs";
import { User } from "../entities/User.entity";
import { Credential } from "../entities/Credential.entity";

export const AppDataSource = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL || `postgres://${config.DB_USERNAME}:${config.DB_PASSWORD}@${config.DB_HOST}:${config.DB_PORT}/${config.DB_NAME}`,
  entities: ["dist/entities/**/*.js"],
  synchronize: config.DB_SYNC,
  logging: config.DB_LOGG,
  dropSchema: config.DB_DROPSCHEMA,
});

export const UserModel: Repository<User> = AppDataSource.getRepository(User);
export const CredentialModel: Repository<Credential> =
  AppDataSource.getRepository(Credential);
