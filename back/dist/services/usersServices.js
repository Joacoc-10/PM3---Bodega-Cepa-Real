"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUsers = getAllUsers;
exports.getUserById = getUserById;
exports.createUser = createUser;
const index_1 = require("./index");
const credentialsServices_1 = require("./credentialsServices"); // Importar el servicio de credenciales
// Implementar una función que pueda retornar el arreglo completo de usuarios.
function getAllUsers() {
    return index_1.users;
}
// Implementar una función que pueda retornar un elemento del arreglo que haya sido identificado por id.
function getUserById(id) {
    return index_1.users.find((user) => user.id === id);
}
// Implementar una función que pueda crear un nuevo usuario.
// Debe crear su correspondiente par de credenciales y guardar el ID.
function createUser(name, email, birthdate, nDni, username, password_plain) {
    // 1. Crear las credenciales primero
    const credentialsId = (0, credentialsServices_1.createCredential)(username, password_plain); // Llama al servicio de credenciales
    // 2. Crear el nuevo usuario con el ID de las credenciales
    const newUser = {
        id: (0, index_1.generateUserId)(),
        name: name,
        email: email,
        birthdate: birthdate,
        nDni: nDni,
        credentialsId: credentialsId, // Asigna el ID de credenciales recibido
    };
    index_1.users.push(newUser);
    return newUser;
}
