"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CredentialModel = exports.UserModel = exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const envs_1 = require("./envs");
const User_entity_1 = require("../entities/User.entity");
const Credential_entity_1 = require("../entities/Credential.entity");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    url: process.env.DATABASE_URL || `postgres://${envs_1.config.DB_USERNAME}:${envs_1.config.DB_PASSWORD}@${envs_1.config.DB_HOST}:${envs_1.config.DB_PORT}/${envs_1.config.DB_NAME}`,
    entities: ["dist/entities/**/*.js"],
    synchronize: envs_1.config.DB_SYNC,
    logging: envs_1.config.DB_LOGG,
    dropSchema: envs_1.config.DB_DROPSCHEMA,
});
exports.UserModel = exports.AppDataSource.getRepository(User_entity_1.User);
exports.CredentialModel = exports.AppDataSource.getRepository(Credential_entity_1.Credential);
