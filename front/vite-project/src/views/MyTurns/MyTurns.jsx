import { useState } from "react";
import myAppointments from "../../helpers/myAppointments";
import Turn from "../../components/Turns/Turns";
import myTurnsStyles from "../MyTurns/MyTurns.module.css";

export default function MyTurns() {
  const [turns, setTurns] = useState(myAppointments);

  return (
    <div className={myTurnsStyles.myTurnsContainer}>
      <div>
        <h1> Mis Reservas</h1>
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
