import { useEffect, useState } from "react";
import Turn from "../../components/Turns/Turns";
import myTurnsStyles from "../MyTurns/MyTurns.module.css";
import axios from "axios";
import Reservations from "../ReservationsForm/Reservations";
import Swal from "sweetalert2";

export default function MyTurns() {
  const [turns, setTurns] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUserTurns = () => {
    setLoading(true);

    const userJSON = localStorage.getItem("user");
    let userId = null;

    if (!userJSON) {
      Swal.fire({
        icon: "warning",
        title: "Usuario no encontrado",
        text: "Para ver tus reservas, por favor inicia sesión.",
      });
      setLoading(false);
      setTurns([]);
      return;
    }

    try {
      const user = JSON.parse(userJSON);
      userId = user.id;
    } catch {
      Swal.fire({
        icon: "error",
        title: "Error de usuario",
        text: "Hubo un problema al cargar tu información de usuario.",
      });
      setLoading(false);
      setTurns([]);
      return;
    }

    if (!userId) {
      Swal.fire({
        icon: "warning",
        title: "ID de usuario no disponible",
        text: "No se pudo identificar tu usuario para cargar las reservas.",
      });
      setLoading(false);
      setTurns([]);
      return;
    }

    axios
      .get(`http://localhost:3000/users/${userId}`)
      .then((response) => {
        if (
          response.data &&
          response.data.data &&
          response.data.data.appointments
        ) {
          const sortedTurns = response.data.data.appointments.sort((a, b) => {
            if (a.status === "Cancelada" && b.status !== "Cancelada") return 1;
            if (a.status !== "Cancelada" && b.status === "Cancelada") return -1;
            return 0;
          });
          setTurns(sortedTurns);
        } else {
          setTurns([]);
        }
      })
      .catch((err) => {
        let errorMessage = "Error al cargar tus reservas.";
        if (err.response && err.response.data && err.response.data.error) {
          errorMessage = err.response.data.error;
        }
        Swal.fire({
          icon: "error",
          title: "Error de carga",
          text: errorMessage,
        });
        setTurns([]);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchUserTurns();
  }, []);

  const handleCancelTurn = (userId) => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¡No podrás revertir esta acción!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, cancelar turno",
      cancelButtonText: "No, mantener",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Cancelando...",
          allowOutsideClick: false,
          didOpen: () => {
            Swal.showLoading();
          },
        });

        axios
          .put(`http://localhost:3000/appointments/cancel/${userId}`)
          .then((response) => {
            if (response.status === 200) {
              Swal.fire(
                "¡Cancelado!",
                "Tu turno ha sido cancelado exitosamente.",
                "success"
              );

              fetchUserTurns();
            } else {
              Swal.fire(
                "Error",
                "No se pudo cancelar el turno. Inténtalo de nuevo.",
                "error"
              );
            }
          })
          .catch((err) => {
            let errorMessage =
              "No se pudo cancelar el turno. Error de conexión o del servidor.";
            if (err.response && err.response.data && err.response.data.error) {
              errorMessage = err.response.data.error;
            } else if (err.message) {
              errorMessage = err.message;
            }
            Swal.fire("Error", errorMessage, "error");
          });
      }
    });
  };

  if (loading) {
    return (
      <div className={myTurnsStyles.myTurnsContainer}>
        Cargando tus reservas...
      </div>
    );
  }

  return (
    <div className={myTurnsStyles.myTurnsContainer}>
      <Reservations />
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
              onCancel={handleCancelTurn}
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
