import Home from "../views/Home/Home";
import MyTurns from "../views/MyTurns/MyTurns";
import Header from "../views/Header/Header";
import Register from "../views/Register/Register";
import Login from "../views/Login/Login";
import Contact from "../components/Contact/Contact";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLogged(true);
    navigate("/home");
  };
  const handleLogout = () => {
    setIsLogged(false);
    navigate("/home");
  };

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    if (token) {
      setIsLogged(true);
    }
  }, []);

  return (
    <>
      <Header isLogged={isLogged} onLogout={handleLogout} />

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

        <Route path="*" element={<h1> 404: Pagina no encontrada</h1>} />
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
