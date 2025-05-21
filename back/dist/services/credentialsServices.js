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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkUserCredentials = exports.createCredential = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const credentials = [];
let identificador = 1;
const salt_rounds = 10;
const createCredential = (username, password) => __awaiter(void 0, void 0, void 0, function* () {
    if (checkUserExist(username)) {
        throw new Error(`El usuario con username: ${username} ya existe`);
    }
    const hashedPassword = yield bcrypt_1.default.hash(password, salt_rounds);
    const newCredential = {
        id: identificador,
        username: username,
        password: hashedPassword,
    };
    credentials.push(newCredential);
    identificador++;
    return newCredential.id;
});
exports.createCredential = createCredential;
const checkUserExist = (username) => {
    const usernameFound = credentials.find((cred) => cred.username === username);
    return !!usernameFound;
};
const checkUserCredentials = (username, password) => __awaiter(void 0, void 0, void 0, function* () {
    const usernameFound = credentials.find((cred) => cred.username === username);
    if (!usernameFound)
        throw new Error("El usuario no existe");
    const isPasswordCorrect = yield bcrypt_1.default.compare(password, usernameFound.password);
    if (isPasswordCorrect) {
        return usernameFound.id;
    }
    else {
        throw new Error("La contraseña es incorrecta");
    }
});
exports.checkUserCredentials = checkUserCredentials;
