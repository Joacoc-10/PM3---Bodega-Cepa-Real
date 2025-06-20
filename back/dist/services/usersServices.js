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
exports.loginUserService = exports.registerUserService = exports.getUserByIdService = exports.getUserService = void 0;
const data_source_1 = require("../config/data-source");
const User_entity_1 = require("../entities/User.entity");
const validationUserAge_1 = require("../utils/validationUserAge");
const credentialsServices_1 = require("./credentialsServices");
const getUserService = () => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield data_source_1.UserModel.find();
    return users;
});
exports.getUserService = getUserService;
const getUserByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const userFound = yield data_source_1.UserModel.findOne({
        where: {
            id: id,
        },
        relations: ["appointments"],
    });
    if (!userFound)
        throw Error(`El usuario con el Id: ${id}, no fue encontrado`);
    return userFound;
});
exports.getUserByIdService = getUserByIdService;
const registerUserService = (user) => __awaiter(void 0, void 0, void 0, function* () {
    (0, validationUserAge_1.validationUserAge)(user.name, user.birthdate);
    const resultadoTransaccion = yield data_source_1.AppDataSource.transaction((entityManager) => __awaiter(void 0, void 0, void 0, function* () {
        const credentialId = yield (0, credentialsServices_1.createCredential)(entityManager, user.username, user.password);
        const newUser = entityManager.create(User_entity_1.User, {
            name: user.name,
            email: user.email,
            nDni: user.nDni,
            birthdate: new Date(user.birthdate),
            credentials: credentialId,
        });
        yield entityManager.save(newUser);
        return newUser;
    }));
    return resultadoTransaccion;
});
exports.registerUserService = registerUserService;
const loginUserService = (userCredentials) => __awaiter(void 0, void 0, void 0, function* () {
    const credential = yield (0, credentialsServices_1.checkUserCredentials)(userCredentials.username, userCredentials.password);
    const userFound = yield data_source_1.UserModel.findOne({
        where: {
            credentials: {
                id: credential.id,
            },
        },
    });
    return userFound;
});
exports.loginUserService = loginUserService;
