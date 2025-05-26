import Home from "../views/Home/Home";
import MyTurns from "../views/MyTurns/MyTurns";
import Header from "../views/Header/Header";
import fondoTotal from "../app/App.module.css";

function App() {
  return (
    <div className={fondoTotal.fondoTotal}>
      <Header />
      <Home />
      <MyTurns />
    </div>
  );
}

export default App;
