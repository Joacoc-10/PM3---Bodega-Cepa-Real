import { useFormik } from "formik";
import axios from "axios";
import Swal from "sweetalert2";
import { loginFormValidate } from "../../helpers/registerFormValidate";
import LoginStyles from "../Register/Register.module.css";
import { Link } from "react-router-dom";

export default function Login({ onLoginSucess }) {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    initialErrors: {
      username: "Nombre de usuario requerido",
      password: "Contraseña requerida",
    },
    validate: loginFormValidate,
    onSubmit: (values) => {
      axios
        .post(`${process.env.REACT_APP_BACKEND_URL}/users/login`, values)
        .then((res) => {
          if (res.status === 200)
            localStorage.setItem("user", JSON.stringify(res.data.user));

          Swal.fire({
            icon: "success",
            title: "Usuario logeado correctamente",
          });
          if (onLoginSucess) {
            onLoginSucess();
          }
        })
        .catch((err) => {
          if (err.status === 400)
            Swal.fire({
              icon: "error",
              title: `${err.response.data.error}`,
              text: "Intentelo nuevamente",
            });
        });
    },
  });

  return (
    <div className={LoginStyles.registerFormContainer}>
      <form onSubmit={formik.handleSubmit} className={LoginStyles.registerForm}>
        <h2> Iniciar Sesión</h2>

        <div>
          <label>Nombre de usuario:</label>
          <input
            type="text"
            className={LoginStyles.labelForm}
            name="username"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
          />
          {formik.errors.username && formik.errors.username ? (
            <label className={LoginStyles.errorMessage}>
              {formik.errors.username}
            </label>
          ) : null}
        </div>

        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.errors.password && formik.errors.password ? (
            <label className={LoginStyles.errorMessage}>
              {formik.errors.password}
            </label>
          ) : null}
        </div>

        <button
          type="submit"
          disabled={
            Object.keys(formik.errors).length > 0 ||
            !formik.values.username ||
            !formik.values.password
          }
        >
          Iniciar sesion
        </button>

        <div className={LoginStyles.loginQuestionWrapper}>
          <p className={LoginStyles.loginQuestionText}>
            ¿Aún no tienes cuenta?
            <Link to="/register" className={LoginStyles.loginLinkButton}>
              Regístrate
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
