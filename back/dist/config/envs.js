"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
require("dotenv/config");
exports.config = {
    PORT: process.env.PORT ? parseInt(process.env.PORT, 10) : 3000,
    DB_HOST: process.env.DB_HOST,
    DB_PORT: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432,
    DB_USERNAME: process.env.DB_USERNAME || "",
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_NAME: process.env.DB_NAME,
    DB_SYNC: process.env.DB_SYNC ? process.env.DB_SYNC === "true" : true,
    DB_DROPSCHEMA: process.env.DB_DROPSCHEMA
        ? process.env.DB_DROPCHEMA === "true"
        : true,
    DB_LOGG: process.env.DB_LOGG ? process.env.DB_LOGG === "false" : false,
};
