import NavBar from "../../components/Navbar/Navbar";
import headerStyles from "../Header/Header.module.css";
import logo from "../../assets/Lacre_Bodega_CepaReal.png";

const Header = () => {
  return (
    <div>
      <header className={headerStyles.header}>
        <img src={logo} className={headerStyles.logoImg}></img>
        <div className={headerStyles.navbarContainer}>
          <NavBar />
        </div>
      </header>
    </div>
  );
};

export default Header;
