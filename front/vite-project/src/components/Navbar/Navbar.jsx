import navbarStyle from "../Navbar/Navbar.module.css";

const NavBar = () => {
  return (
    <>
      <nav>
        <ul className={navbarStyle.navList}>
          <li>
            <a href="#"> Inicio </a>
          </li>
          <li>
            <a href="#"> Reservas </a>
          </li>
          <li>
            <a href="#"> Contacto </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
