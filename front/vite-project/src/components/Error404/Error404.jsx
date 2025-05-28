import ErrorStyles from "../Error404/Error404.module.css";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <>
      <div className={ErrorStyles.notFoundContainer}>
        <h1 className={ErrorStyles.errorCode}>404</h1>
        <h2 className={ErrorStyles.errorMessage}>
          ¡Vaya! Página no encontrada.
        </h2>
        <p className={ErrorStyles.errorDescription}>
          Parece que la página que buscas no existe.
        </p>
        <Link to="/home" className={ErrorStyles.homeButton}>
          Volver al Inicio
        </Link>
      </div>
    </>
  );
};

export default Error404;
