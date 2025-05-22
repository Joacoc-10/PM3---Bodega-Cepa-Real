import turnStyles from "../Turns/Turns.module.css";

export default function Turn({ id, date, time, status }) {
  const statusColor =
    status === "Activa" ? "green" : status === "Cancelada" ? "red" : "gray";

  return (
    <div className={turnStyles.turnCard}>
      <div className={turnStyles.cardHeader}>
        <h3> Reserva #{id}</h3>
        <span
          className={turnStyles.statusSpan}
          style={{ backgroundColor: statusColor }}
        >
          {status}
        </span>
      </div>
      <div className={turnStyles.cardBody}>
        <p>
          <strong>Fecha:</strong> <span> {date} </span>
        </p>
        <p>
          <strong> Hora:</strong> <span> {time} </span>
        </p>
      </div>
    </div>
  );
}
