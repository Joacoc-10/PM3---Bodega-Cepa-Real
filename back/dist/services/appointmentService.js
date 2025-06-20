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
const Appointment_Repository_1 = require("../repositories/Appointment.Repository");
const usersServices_1 = require("./usersServices");
const AppointmentInterface_1 = require("../interfaces/AppointmentInterface");
const getAppointmentService = () => __awaiter(void 0, void 0, void 0, function* () {
    const appointments = yield Appointment_Repository_1.AppointmentModel.find();
    if (appointments.length === 0)
        throw new Error(` No hay citas registradas`);
    return appointments;
});
exports.getAppointmentService = getAppointmentService;
const getAppointementByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const appointmentFound = yield Appointment_Repository_1.AppointmentModel.findOne({ where: { id } });
    if (!appointmentFound)
        throw Error(`La cita con Id: ${id} no fue encontrada`);
    return appointmentFound;
});
exports.getAppointementByIdService = getAppointementByIdService;
const registerAppointmentService = (appointment) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, usersServices_1.getUserByIdService)(appointment.userId);
    Appointment_Repository_1.AppointmentModel.validateAllowAppointment(appointment.date, appointment.time);
    yield Appointment_Repository_1.AppointmentModel.validateExistingAppointment(appointment.userId, appointment.date, appointment.time);
    const newAppointment = yield Appointment_Repository_1.AppointmentModel.create({
        date: appointment.date,
        time: appointment.time,
        user: {
            id: appointment.userId,
        },
    });
    return yield Appointment_Repository_1.AppointmentModel.save(newAppointment);
});
exports.registerAppointmentService = registerAppointmentService;
const cancelAppointemtnsService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const appointmentFound = yield Appointment_Repository_1.AppointmentModel.findOne({
        where: { id },
    });
    if (!appointmentFound)
        throw Error(`La reserva con Id: ${id} no existe`);
    appointmentFound.status = AppointmentInterface_1.Status.cancelled;
    yield Appointment_Repository_1.AppointmentModel.save(appointmentFound);
});
exports.cancelAppointemtnsService = cancelAppointemtnsService;
