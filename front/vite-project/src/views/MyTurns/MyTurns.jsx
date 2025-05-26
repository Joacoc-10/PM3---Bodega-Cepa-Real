import { useEffect, useState } from "react";
import Turn from "../../components/Turns/Turns";
import myTurnsStyles from "../MyTurns/MyTurns.module.css";
import axios from "axios";

export default function MyTurns() {
  const [turns, setTurns] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/appointments")
      .then(({ data }) => {
        setTurns(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={myTurnsStyles.myTurnsContainer}>
      <div>
        <h1 className={myTurnsStyles.myTurnsTitle}> Mis Reservas</h1>
      </div>
      <div className={myTurnsStyles.cardsContainer}>
        {turns.length > 0 ? (
          turns.map((turn) => (
            <Turn
              key={turn.id}
              id={turn.id}
              date={turn.date}
              time={turn.time}
              status={turn.status}
            />
          ))
        ) : (
          <h1 className={myTurnsStyles.noTurnsMessage}>
            {" "}
            No hay turnos para mostrar
          </h1>
        )}
      </div>
    </div>
  );
}
