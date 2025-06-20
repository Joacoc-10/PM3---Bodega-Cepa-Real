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
exports.AppointmentModel = void 0;
const data_source_1 = require("../config/data-source");
const Appointment_entity_1 = require("../entities/Appointment.entity");
exports.AppointmentModel = data_source_1.AppDataSource.getRepository(Appointment_entity_1.Appointment).extend({
    validateAllowAppointment: function (date, time) {
        const [hours, minutes] = time.split(":").map(Number);
        const appointmentDate = new Date(date);
        appointmentDate.setHours(hours, minutes, 0);
        const today = new Date();
        const appointmentDateInUru = new Date(appointmentDate.getTime() - 3 * 60 * 60 * 1000);
        const nowInUru = new Date(new Date().getTime() - 3 * 60 * 60 * 1000);
        if (appointmentDateInUru < nowInUru) {
            throw Error(`No se puede reservar mesa para fechas pasadas`);
        }
        const difMiliSeconds = today.getTime() - appointmentDate.getTime();
        const difInHours = difMiliSeconds / (1000 * 60 * 60);
        if (difInHours > 1)
            throw Error(`Se debe reservar con al menos una hr de anticipacion`);
        const dayOfWeek = appointmentDateInUru.getUTCDay();
        if (dayOfWeek === 0 || dayOfWeek === 6)
            throw new Error("Los fines de semana nos mantenemos cerrados");
        if (hours < 12 || hours > 23.5) {
            throw Error(`El horario de apertura es de 12:00pm a 23:30pm`);
        }
    },
    validateExistingAppointment: function (userId, date, time) {
        return __awaiter(this, void 0, void 0, function* () {
            const appointmentFound = yield this.findOne({
                where: {
                    user: {
                        id: userId,
                    },
                    time: time,
                    date: date,
                },
            });
            if (appointmentFound)
                throw Error(`Ya existe una reserva con estas credenciales`);
        });
    },
});
