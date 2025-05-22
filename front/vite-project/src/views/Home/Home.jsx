import NavBar from "../../components/Navbar/Navbar";
import homeStyles from "../Home/Home.module.css";

const Home = () => {
  return (
    <div className={homeStyles.pageContainer}>
      <header className={homeStyles.header}>
        <h1 className={homeStyles.logo}> HOME </h1>
        <NavBar />
      </header>
    </div>
  );
};

export default Home;
