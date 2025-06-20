"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationUserAge = void 0;
const customError_1 = require("./customError");
const validationUserAge = (username, date) => {
    const today = new Date().getFullYear();
    const userBirth = new Date(date).getFullYear();
    const age = today - userBirth;
    if (userBirth > today)
        throw new customError_1.CustomError(400, `El usuario ${username} no puede registrarse con una fecha de nacimiento del futoro`);
    if (age < 18)
        throw new customError_1.CustomError(400, `El usuario con ${username} no puede registrarse siendo menor de 18 años`);
};
exports.validationUserAge = validationUserAge;
