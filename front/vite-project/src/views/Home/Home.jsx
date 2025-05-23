import NavBar from "../../components/Navbar/Navbar";
import homeStyles from "../Home/Home.module.css";
import logo from "../../assets/Labodegareal_logo-removebg-preview.png";

const Home = () => {
  return (
    <div>
      <header className={homeStyles.header}>
        {/* <h1 className={homeStyles.logo}> Bodega La Cepa Real </h1> */}
        <img src={logo} className={homeStyles.logoImg}></img>
        <div className={homeStyles.navbarContainer}>
          <NavBar />
        </div>
      </header>
    </div>
  );
};

export default Home;
