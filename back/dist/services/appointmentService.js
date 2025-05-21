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
exports.cancelAppointemtnsService = exports.registerAppointmentService = exports.getAppointementByIdService = exports.getAppointmentService = void 0;
const AppointmentInterface_1 = require("../interfaces/AppointmentInterface");
const usersServices_1 = require("./usersServices");
const appointments = [];
let identificador = 1;
const getAppointmentService = () => __awaiter(void 0, void 0, void 0, function* () {
    return appointments;
});
exports.getAppointmentService = getAppointmentService;
const getAppointementByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const appointmentFound = appointments.find((app) => app.id === id);
    if (!appointmentFound)
        throw Error(`La cita con Id: ${id} no fue encontrada`);
    return appointmentFound;
});
exports.getAppointementByIdService = getAppointementByIdService;
const registerAppointmentService = (appointment) => __awaiter(void 0, void 0, void 0, function* () {
    const userFound = yield (0, usersServices_1.getUserByIdService)(appointment.userId);
    const appointmetnFound = appointments.find((app) => app.userId === appointment.userId &&
        app.time === appointment.time &&
        new Date(app.date).getTime() === new Date(appointment.date).getTime());
    if (appointmetnFound)
        throw Error(`La cita ya existe`);
    const newAppointment = {
        id: identificador++,
        date: appointment.date,
        time: appointment.time,
        status: AppointmentInterface_1.Status.active,
        userId: (userFound === null || userFound === void 0 ? void 0 : userFound.id) || 0,
    };
    appointments.push(newAppointment);
    return newAppointment;
});
exports.registerAppointmentService = registerAppointmentService;
const cancelAppointemtnsService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const appointmentFound = yield (0, exports.getAppointementByIdService)(id);
    appointmentFound.status = AppointmentInterface_1.Status.cancelled;
});
exports.cancelAppointemtnsService = cancelAppointemtnsService;
