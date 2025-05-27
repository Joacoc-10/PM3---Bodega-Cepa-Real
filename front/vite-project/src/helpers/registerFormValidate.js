export const registerFormValidate = (input) => {
  const errors = {};

  if (!input.name.trim()) {
    errors.name = "El nombre es requerido";
  } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s'-]+$/.test(input.name)) {
    errors.name = "Debe ser un nombre valido";
  }

  if (!input.email.trim()) {
    errors.email = "El email es requerido";
  } else if (!/^\S+@\S+\.\S+$/.test(input.email)) {
    errors.email = "Debes ingresar una direccion de correo valida";
  }

  if (!input.birthdate) {
    errors.birthdate = "La fecha de cumpleaños es requerida";
  } else {
    const today = new Date();
    const birthdate = new Date(input.birthdate);
    const age = today.getFullYear() - birthdate.getFullYear();
    if (age < 18)
      errors.birthdate = "El usuario debe de ser mayor de 18 años de edad";
  }

  if (!input.nDni) {
    errors.nDni = "El DNI es requerido";
  } else if (!/^\d{7,8}$/.test(input.nDni)) {
    errors.nDni = "El DNI Uruguayo debe contener entre 7 y 8 numeros";
  }

  if (!input.username.trim()) {
    errors.username = "El nombre de usuario es requerido";
  } else if (
    !/^[a-zA-Z0-9][a-zA-Z0-9._-]{1,18}[a-zA-Z0-9]$/.test(input.username)
  ) {
    errors.username =
      "El nombre de usuario puede contener: letras, numeros, punto(.) y guiones(- , _ )";
  }

  if (!input.password.trim()) {
    errors.username = "El contraseña es requerida ";
  } else if (input.password.length < 8) {
    errors.password = "La contraseña debe contener al menos 8 caracteres";
  } else if (!/[A-Z]/.test(input.password)) {
    errors.password = "Debe contener al menos una letra mayuscula";
  } else if (!/[0-9]/.test(input.password)) {
    errors.password = "Debe contener al menos un numero";
  }
};

export const loginFormValidate = (input) => {
  const errors = {};

  if (!input.username.trim()) {
    errors.username = "El nombre de usuario es requerido";
  } else if (
    !/^[a-zA-Z0-9][a-zA-Z0-9._-]{1,18}[a-zA-Z0-9]$/.test(input.username)
  ) {
    errors.username =
      "El nombre de usuario puede contener: letras, numeros, punto(.) y guiones(- , _ )";
  }

  if (!input.password.trim()) {
    errors.username = "El contraseña es requerida ";
  } else if (input.password.length < 8) {
    errors.password = "La contraseña debe contener al menos 8 caracteres";
  } else if (!/[A-Z]/.test(input.password)) {
    errors.password = "Debe contener al menos una letra mayuscula";
  } else if (!/[0-9]/.test(input.password)) {
    errors.password = "Debe contener al menos un numero";
  }
};
