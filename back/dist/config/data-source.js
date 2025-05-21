"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const envs_1 = require("./envs");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: envs_1.config.DB_HOST,
    port: envs_1.config.DB_PORT,
    username: envs_1.config.DB_USERNAME,
    password: envs_1.config.DB_PASSWORD,
    database: envs_1.config.DB_NAME,
    synchronize: envs_1.config.DB_SYNC,
    logging: envs_1.config.DB_LOGG,
    entities: ["src/entities/**/*.ts"],
    // dropSchema: config.DB_DROPSCHEMA
});
