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
exports.cancelStatusAppointmentsController = exports.registerAppointmentsController = exports.getAppointmentByIdController = exports.getAppointmentsController = void 0;
const appointmentService_1 = require("../services/appointmentService");
const getAppointmentsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const appointments = yield (0, appointmentService_1.getAppointmentService)();
        res.status(200).json({
            msg: "Obtener el listado de todos los turnos de todos los usuarios",
            data: appointments,
        });
    }
    catch (error) {
        res.status(404).json({
            msg: "Ocurrio un error",
            error: error instanceof Error ? error.message : "Error desconocido",
        });
    }
});
exports.getAppointmentsController = getAppointmentsController;
const getAppointmentByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id, 10);
        const appointmentFound = yield (0, appointmentService_1.getAppointementByIdService)(id);
        res.status(200).json({
            msg: "Obtener el detalle de un turno especifico",
            data: appointmentFound,
        });
    }
    catch (error) {
        res.status(404).json({
            msg: "Ocurrio un error",
            error: error instanceof Error ? error.message : "Error desconocido",
        });
    }
});
exports.getAppointmentByIdController = getAppointmentByIdController;
const registerAppointmentsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const appointmentCreate = yield (0, appointmentService_1.registerAppointmentService)(req.body);
        res.status(201).json({
            msg: "Agendar un nuevo turno",
            data: appointmentCreate,
        });
    }
    catch (error) {
        res.status(400).json({
            msg: "Ocurrio un error",
            error: error instanceof Error ? error.message : "Error desconocido",
        });
    }
});
exports.registerAppointmentsController = registerAppointmentsController;
const cancelStatusAppointmentsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, appointmentService_1.cancelAppointemtnsService)(parseInt(req.params.id, 10));
        res.status(200).json({
            msg: "Cita cancelada",
        });
    }
    catch (error) {
        res.status(404).json({
            msg: "Ocurrio un error",
            error: error instanceof Error ? error.message : "Error desconocido",
        });
    }
});
exports.cancelStatusAppointmentsController = cancelStatusAppointmentsController;
