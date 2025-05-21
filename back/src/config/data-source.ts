import { DataSource, Repository } from "typeorm";
import { config } from "./envs";
import { User } from "../entities/User.entity";
import { Credential } from "../entities/Credential.entity";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: config.DB_HOST,
  port: config.DB_PORT,
  username: config.DB_USERNAME,
  password: config.DB_PASSWORD,
  database: config.DB_NAME,
  synchronize: config.DB_SYNC,
  logging: config.DB_LOGG,
  entities: ["src/entities/**/*.ts"],
  dropSchema: config.DB_DROPSCHEMA,
});

export const UserModel: Repository<User> = AppDataSource.getRepository(User);
export const CredentialModel: Repository<Credential> =
  AppDataSource.getRepository(Credential);
