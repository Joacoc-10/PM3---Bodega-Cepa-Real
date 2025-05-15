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
exports.loginUserController = exports.registerUserController = exports.getUserByIdController = exports.getUsersController = void 0;
const getUsersController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(200).json({
            msg: "Obtener el listado de todos los usuarios",
            data: [],
        });
    }
    catch (error) {
        res.status(500).json({
            msg: "Ocurrio un error",
            error: error instanceof Error ? error.message : "Error desconocido",
        });
    }
});
exports.getUsersController = getUsersController;
const getUserByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(200).json({
            msg: "Obtener el detalle de un usuario especifico",
            data: req.params.id,
        });
    }
    catch (error) {
        res.status(500).json({
            msg: "Ocurrio un error",
            error: error instanceof Error ? error.message : "Error desconocido",
        });
    }
});
exports.getUserByIdController = getUserByIdController;
const registerUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(200).json({
            msg: "Registro un nuevo usuario",
            data: req.body,
        });
    }
    catch (error) {
        res.status(500).json({
            msg: "Ocurrio un error",
            error: error,
        });
    }
});
exports.registerUserController = registerUserController;
const loginUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(200).json({
            msg: "Login del usuario a la aplicacion",
            data: req.body,
        });
    }
    catch (error) {
        res.status(500).json({
            msg: "Ocurrio un error",
            error: error,
        });
    }
});
exports.loginUserController = loginUserController;
