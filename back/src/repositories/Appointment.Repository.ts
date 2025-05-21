import { AppDataSource } from "../config/data-source";
import { Appointment } from "../entities/Appointment.entity";

export const AppointmentModel = AppDataSource.getRepository(Appointment).extend(
  {
    validateAllowAppointment: function (date: Date, time: string): void {
      const [hours, minutes] = time.split(":").map(Number);
      const appointmentDate = new Date(date);
      appointmentDate.setHours(hours, minutes, 0);
      const today = new Date();

      const appointmentDateInUru = new Date(
        appointmentDate.getTime() - 3 * 60 * 60 * 1000
      );
      const nowInUru = new Date(new Date().getTime() - 3 * 60 * 60 * 1000);

      if (appointmentDateInUru < nowInUru) {
        throw Error(`No se puede reservar mesa para fechas pasadas`);
      }

      const difMiliSeconds = today.getTime() - appointmentDate.getTime();
      const difInHours = difMiliSeconds / (1000 * 60 * 60);
      if (difInHours > 1)
        throw Error(`Se debe reservar con al menos una hr de anticipacion`);

      const dayOfWeek = appointmentDateInUru.getUTCDay();
      if (dayOfWeek === 0 || dayOfWeek === 6)
        throw new Error("Los fines de semana nos mantenemos cerrados");

      if (hours < 12 || hours > 23.5) {
        throw Error(`El horario de apertura es de 12:00pm a 23:30pm`);
      }
    },
    validateExistingAppointment: async function (
      userId: number,
      date: Date,
      time: string
    ): Promise<void> {
      const appointmentFound = await this.findOne({
        where: {
          user: {
            id: userId,
          },
          time: time,
          date: date,
        },
      });
      if (appointmentFound)
        throw Error(`Ya existe una reserva con estas credenciales`);
    },
  }
);
