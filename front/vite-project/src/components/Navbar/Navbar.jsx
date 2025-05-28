import { Link } from "react-router-dom";
import navbarStyle from "../Navbar/Navbar.module.css";

const NavBar = ({ isLogged, onLogout }) => {
  return (
    <>
      <nav>
        <ul className={navbarStyle.navList}>
          <li>
            <Link to="/home"> Inicio </Link>
          </li>
          <li>
            {isLogged ? (
              <Link to="/myturns"> Reservas </Link>
            ) : (
              <Link to="/register"> Reservas </Link>
            )}
          </li>
          <li>
            <Link to="/contact"> Contacto </Link>
          </li>
          {!isLogged && (
            <li>
              <Link to="/login"> Iniciar Sesión</Link>
            </li>
          )}
          {isLogged && (
            <li>
              <button onClick={onLogout}>Cerrar sesion</button>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
