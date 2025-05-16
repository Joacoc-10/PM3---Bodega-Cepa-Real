"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllAppointments = getAllAppointments;
exports.getAppointmentById = getAppointmentById;
exports.createAppointment = createAppointment;
exports.cancelAppointment = cancelAppointment;
const index_1 = require("./index");
// Implementar una función que pueda retornar el arreglo completo de turnos.
function getAllAppointments() {
    return index_1.appointments;
}
// Implementar una función que pueda obtener el detalle de un turno por ID.
function getAppointmentById(id) {
    return index_1.appointments.find((appointment) => appointment.id === id);
}
// Implementar una función que pueda crear un nuevo turno.
// Siempre guardando el ID del usuario que ha creado dicho turno. NO PUEDE HABER UN TURNO SIN ID DE USUARIO.
function createAppointment(date, time, userId // Aseguramos que el userId sea pasado
) {
    if (!userId) {
        throw new Error("El ID de usuario es requerido para crear un turno.");
    }
    const newAppointment = {
        id: (0, index_1.generateAppointmentId)(),
        date: date,
        time: time,
        userId: userId,
        status: "active", // Por defecto, un turno nuevo es 'active'
    };
    index_1.appointments.push(newAppointment);
    return newAppointment;
}
// Implementar una función que reciba el id de un turno específico y,
// una vez identificado el turno correspondiente, cambiar su estado a “cancelled”.
function cancelAppointment(id) {
    const appointmentToCancel = index_1.appointments.find((appointment) => appointment.id === id);
    if (appointmentToCancel) {
        appointmentToCancel.status = "cancelled";
    }
    return appointmentToCancel; // Retorna el turno actualizado o undefined si no se encontró
}
