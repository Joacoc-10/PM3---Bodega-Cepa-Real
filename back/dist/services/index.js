"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateCredentialId = exports.generateAppointmentId = exports.generateUserId = exports.credentials = exports.appointments = exports.users = void 0;
// Simular la "base de datos" con arreglos en memoria
exports.users = [];
exports.appointments = [];
exports.credentials = [];
// Para generar IDs simples (en una DB real, esto sería autoincremental)
let nextUserId = 1;
let nextAppointmentId = 1;
let nextCredentialId = 1;
const generateUserId = () => nextUserId++;
exports.generateUserId = generateUserId;
const generateAppointmentId = () => nextAppointmentId++;
exports.generateAppointmentId = generateAppointmentId;
const generateCredentialId = () => nextCredentialId++;
exports.generateCredentialId = generateCredentialId;
// Puedes precargar algunos datos aquí si quieres, o dejarlo vacío para empezar.
// Ejemplo de precarga (puedes usar ChatGPT para generar más):
/*
users.push({
    id: generateUserId(),
    name: "Joaquín Pérez",
    email: "joaquin@example.com",
    birthdate: new Date('1990-05-15'),
    nDni: "12345678A",
    credentialsId: 1
});
credentials.push({
    id: 1,
    username: "joaquin.perez",
    password: "password123" // En una app real, esto estaría hasheado!
});
*/
