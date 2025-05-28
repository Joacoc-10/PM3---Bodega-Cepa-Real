import Home from "../views/Home/Home";
import MyTurns from "../views/MyTurns/MyTurns";
import Header from "../views/Header/Header";
import Register from "../views/Register/Register";
import Login from "../views/Login/Login";
import Contact from "../components/Contact/Contact";
import {
  Navigate,
  Route,
  Routes,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { useEffect, useState } from "react";
import Error404 from "../components/Error404/Error404";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const routesWhitLayout = [
    "/",
    "/home",
    "/contact",
    "/register",
    "/login",
    "/myturns",
  ];

  const shouldShowLayout = routesWhitLayout.includes(location.pathname);

  const handleLogin = () => {
    setIsLogged(true);
    setTimeout(() => {
      navigate("/myturns");
    }, 0);
  };

  const handleLogout = () => {
    setIsLogged(false);
    navigate("/home");
    setTimeout(() => {
      navigate("/home");
    }, 0);
  };

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, []);

  return (
    <>
      {shouldShowLayout && (
        <Header isLogged={isLogged} onLogout={handleLogout} />
      )}
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />

        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/register"
          element={<Register onRegisterSucess={handleLogin} />}
        />
        <Route path="/login" element={<Login onLoginSucess={handleLogin} />} />

        <Route
          path="/myturns"
          element={isLogged ? <MyTurns /> : <Navigate to="/login" replace />}
        />

        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;

{
  /* <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/myturns" element={<MyTurns />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> */
}
