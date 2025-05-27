import NavBar from "../../components/Navbar/Navbar";
import headerStyles from "../Header/Header.module.css";
import logo from "../../assets/Lacre_Bodega_CepaReal.png";

const Header = ({ isLogged, onLogout }) => {
  return (
    <div>
      <header className={headerStyles.header}>
        <img src={logo} className={headerStyles.logoImg}></img>
        <div className={headerStyles.navbarContainer}>
          <NavBar isLogged={isLogged} onLogout={onLogout} />
        </div>
      </header>
    </div>
  );
};

export default Header;
