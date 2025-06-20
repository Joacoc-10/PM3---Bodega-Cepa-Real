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
const data_source_1 = require("../config/data-source");
const Credential_entity_1 = require("../entities/Credential.entity");
const bcrypt_1 = __importDefault(require("bcrypt"));
const salt_rounds = 10;
const createCredential = (entityManager, username, password) => __awaiter(void 0, void 0, void 0, function* () {
    yield checkUserExist(username);
    const hashedPassword = yield bcrypt_1.default.hash(password, salt_rounds);
    const newCredential = entityManager.create(Credential_entity_1.Credential, {
        username,
        password: hashedPassword,
    });
    const credentialSave = yield entityManager.save(newCredential);
    return credentialSave;
});
exports.createCredential = createCredential;
const checkUserExist = (username) => __awaiter(void 0, void 0, void 0, function* () {
    const usernameFound = yield data_source_1.CredentialModel.findOne({
        where: { username },
    });
    if (usernameFound)
        throw Error(`El usuario con username ${username} ya existe`);
});
const checkUserCredentials = (username, password) => __awaiter(void 0, void 0, void 0, function* () {
    const credentialFound = yield data_source_1.CredentialModel.findOne({
        where: { username },
    });
    if (!credentialFound)
        throw new Error("El usuario no existe");
    const isPasswordCorrect = yield bcrypt_1.default.compare(password, credentialFound.password);
    if (isPasswordCorrect) {
        return credentialFound;
    }
    else {
        throw new Error("La contraseña es incorrecta");
    }
});
exports.checkUserCredentials = checkUserCredentials;
