import { useFormik } from "formik";
import { registerFormValidate } from "../../helpers/registerFormValidate";
import axios from "axios";
import Swal from "sweetalert2";
import RegisterStyles from "../Register/Register.module.css";
import { Link } from "react-router-dom";

export default function Register() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      birthdate: "",
      nDni: "",
      username: "",
      password: "",
    },
    initialErrors: {
      name: "Nombre es requerido",
      email: "Email es requerido",
      birthdate: "Fecha de cumpleaños requerida",
      nDni: "DNI requerido",
      username: "Nombre de usuario requerido",
      password: "Contraseña requerida",
    },
    validate: registerFormValidate,
    onSubmit: (values, formikHelpers) => {
      axios
        .post("http://localhost:3000/users/register", values)
        .then((res) => {
          if (res.status === 201) {
            Swal.fire({
              title: "Usuario registrado correctamente",
              icon: "success",
            });
            formikHelpers.resetForm();
          }
        })
        .catch((err) => {
          if (err.response.data.error.includes("email")) {
            Swal.fire({
              icon: "error",
              title: `Ya existe un usaurio con el email: ${formik.values.email} `,
            });
          } else if (err.response.data.error.includes("username")) {
            Swal.fire({
              icon: "error",
              title: `Ya existe un usaurio con el Nombre de Usuario: ${formik.values.username} `,
            });
          } else if (err.response.data.error.includes("nDni")) {
            Swal.fire({
              icon: "error",
              title: `Ya existe un usaurio con el DNI: ${formik.values.nDni} `,
            });
          }
        });
    },
  });

  return (
    <div className={RegisterStyles.registerFormContainer}>
      <form
        onSubmit={formik.handleSubmit}
        className={RegisterStyles.registerForm}
      >
        <h2>Formulario de registro</h2>

        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="name"
            className={RegisterStyles.labelForm}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.errors.name && formik.errors.name ? (
            <label className={RegisterStyles.errorMessage}>
              {formik.errors.name}
            </label>
          ) : null}
        </div>

        <div>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            className={RegisterStyles.labelForm}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.errors.email && formik.errors.email ? (
            <label className={RegisterStyles.errorMessage}>
              {formik.errors.email}
            </label>
          ) : null}
        </div>

        <div>
          <label>Fecha de nacimiento:</label>
          <input
            type="date"
            name="birthdate"
            className={RegisterStyles.labelForm}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.birthdate}
          />
          {formik.errors.birthdate && formik.errors.birthadate ? (
            <label className={RegisterStyles.errorMessage}>
              {formik.errors.birthdate}
            </label>
          ) : null}
        </div>

        <div>
          <label>DNI:</label>
          <input
            type="text"
            name="nDni"
            className={RegisterStyles.labelForm}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.nDni}
          />
          {formik.errors.nDni && formik.errors.nDni ? (
            <label className={RegisterStyles.errorMessage}>
              {formik.errors.nDni}
            </label>
          ) : null}
        </div>

        <div>
          <label>Usuario:</label>
          <input
            type="text"
            name="username"
            className={RegisterStyles.labelForm}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
          />
          {formik.errors.username && formik.errors.username ? (
            <label className={RegisterStyles.errorMessage}>
              {formik.errors.username}
            </label>
          ) : null}
        </div>

        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            name="password"
            className={RegisterStyles.labelForm}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.errors.password && formik.errors.password ? (
            <label className={RegisterStyles.errorMessage}>
              {formik.errors.password}
            </label>
          ) : null}
        </div>

        <button
          type="submit"
          disabled={
            Object.keys(formik.errors).length > 0 ||
            !formik.values.name ||
            !formik.values.email ||
            !formik.values.birthdate ||
            !formik.values.nDni ||
            !formik.values.username ||
            !formik.values.password
          }
        >
          Crear usuario
        </button>

        <div className={RegisterStyles.loginQuestionWrapper}>
          <p className={RegisterStyles.loginQuestionText}>
            ¿Ya tienes cuenta?{" "}
            <Link to="/login" className={RegisterStyles.loginLinkButton}>
              Iniciar Sesión
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
