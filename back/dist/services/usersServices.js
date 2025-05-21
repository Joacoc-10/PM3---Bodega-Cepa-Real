"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUserService = exports.getUserByIdService = exports.getUserService = void 0;
const credentialsServices_1 = require("./credentialsServices");
const users = [];
let identificador = 1;
const getUserService = () => __awaiter(void 0, void 0, void 0, function* () {
    const nuevoArray = users.map((user) => {
        return {
            id: user.id,
            name: user.name,
            email: user.email,
        };
    });
    return nuevoArray;
});
exports.getUserService = getUserService;
const getUserByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const userFound = users.find((user) => user.id === id);
    if (!userFound)
        throw Error(`El usuario con el Id: ${id}, no fue encontrado`);
    return userFound;
});
exports.getUserByIdService = getUserByIdService;
const registerUserService = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const credentialId = yield (0, credentialsServices_1.createCredential)(user.username, user.password);
    const newUser = {
        id: identificador++,
        name: user.name,
        email: user.email,
        nDni: user.nDni,
        birthdate: new Date(user.birthdate),
        credentialsId: credentialId,
    };
    users.push(newUser);
    return newUser;
});
exports.registerUserService = registerUserService;
