import turnStyles from "../Turns/Turns.module.css";

export default function Turn({ id, date, time, status, onCancel }) {
  const statusColor =
    status === "Activa" ? "green" : status === "Cancelada" ? "red" : "gray";

  const isCancelled = status === "Cancelada";

  const cardClassName = isCancelled
    ? `${turnStyles.turnCard} ${turnStyles.cancelledCard}`
    : turnStyles.turnCard;

  const handleCancelClick = () => {
    if (onCancel && !isCancelled) {
      onCancel(id);
    }
  };

  return (
    <div className={cardClassName}>
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

      <button
        onClick={handleCancelClick}
        className={`${turnStyles.cancelButton} ${
          isCancelled ? turnStyles.disabledButton : ""
        }`}
        disabled={isCancelled}
      >
        Cancelar Turno
      </button>
    </div>
  );
}
