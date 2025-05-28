import { useFormik } from "formik";
import { dateTimevalidates } from "../../helpers/registerFormValidate";
import ReservationStyle from "../ReservationsForm/Reservations.module.css";
import axios from "axios";
import Swal from "sweetalert2";

export default function Reservations() {
  const formik = useFormik({
    initialValues: {
      date: "",
      time: "",
    },
    initialErrors: {
      date: "La fecha es obligatoria",
      time: "La hora es obligatoroia",
    },
    validate: dateTimevalidates,
    onSubmit: (values) => {
      const userJSON = localStorage.getItem("user");
      const user = JSON.parse(userJSON);
      const schedule = {
        ...values,
        userId: user.id,
      };
      axios
        .post(`http://localhost:3000/appointments/schedule`, schedule)
        .then((res) => {
          if (res.status === 201) {
            Swal.fire({
              icon: "success",
              title: "Reserva confirmada!",
            });
          }
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: `${err.response.data.error}`,
            text: "Intentelo nuevamente.",
          });
        });
    },
  });

  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        className={ReservationStyle.reservationFormContainer}
      >
        <h1 className={ReservationStyle.formTitle}> Reservar</h1>

        <label className={ReservationStyle.formLabel}> Fecha: </label>
        <input
          type="date"
          name="date"
          id="date"
          min={new Date().toISOString().split("T")[0]}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.date}
          className={ReservationStyle.formInput}
        />

        <label className={ReservationStyle.formLabel}> Hora: </label>
        <input
          type="time"
          name="time"
          id="time"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.time}
          className={ReservationStyle.formInput}
        />

        <button
          type="submit"
          disabled={Object.keys(formik.errors).length > 0}
          className={ReservationStyle.reservationButton}
        >
          Reservar turno
        </button>
      </form>
    </>
  );
}
