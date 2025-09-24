import { useFormik } from "formik";
import { dateTimevalidates } from "../../helpers/registerFormValidate";
import ReservationStyle from "../ReservationsForm/Reservations.module.css";
import axios from "axios";
import Swal from "sweetalert2";


const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export default function Reservations({ onReservationSuccess }) {
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
        .post(`${BACKEND_URL}/appointments/schedule`, schedule)
        .then((res) => {
          if (res.status === 201) {
            Swal.fire({
              icon: "success",
              title: "Reserva confirmada!",
            });
            formik.resetForm();
            if (onReservationSuccess) {
              onReservationSuccess();
            }
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
      <form onSubmit={formik.handleSubmit}>
        <h1 className={ReservationStyle.formTitle}> Reservar</h1>

        <div className={ReservationStyle.reservationFormContainer}>
          <div className={ReservationStyle.inputGroup}>
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
            {formik.errors.date && formik.touched.date ? (
              <label className={ReservationStyle.errorMessage}>
                {formik.errors.date}
              </label>
            ) : null}
          </div>

          <div className={ReservationStyle.inputGroup}>
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
            {formik.errors.time && formik.touched.time ? (
              <label className={ReservationStyle.errorMessage}>
                {formik.errors.time}
              </label>
            ) : null}
          </div>
          <button
            type="submit"
            disabled={Object.keys(formik.errors).length > 0}
            className={ReservationStyle.reservationButton}
          >
            Reservar turno
          </button>
        </div>
      </form>
    </>
  );
}
