"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCredential = createCredential;
exports.validateCredential = validateCredential;
exports.getCredentialById = getCredentialById;
const index_1 = require("./index");
// Implementar una función que reciba username y password y cree un nuevo par de credenciales.
// Debe retornar el ID del par de credenciales creado.
function createCredential(username, password_plain) {
    // En una aplicación real, aquí DEBERÍAS hashear la contraseña
    const newCredential = {
        id: (0, index_1.generateCredentialId)(),
        username: username,
        password: password_plain, // ¡ADVERTENCIA: Contraseña en texto plano por ahora, hashear en un proyecto real!
    };
    index_1.credentials.push(newCredential);
    return newCredential.id;
}
// Implementar una función que recibirá username y password, y deberá chequear si el nombre de usuario existe
// entre los datos disponibles y, si es así, si el password es correcto.
// En caso de que la validación sea exitosa, deberá retornar el ID de las credenciales.
function validateCredential(username, password_plain) {
    const foundCredential = index_1.credentials.find((cred) => cred.username === username && cred.password === password_plain); // Comparación simple por ahora
    return foundCredential ? foundCredential.id : undefined;
}
// Opcional: Función para obtener credencial por ID (útil para el servicio de usuarios)
function getCredentialById(id) {
    return index_1.credentials.find((cred) => cred.id === id);
}
