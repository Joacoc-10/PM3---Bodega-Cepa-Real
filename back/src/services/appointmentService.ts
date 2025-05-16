import { AppointmentRegisterDTO } from "../dtos/AppointmentsDTO";
import { IAppointment, Status } from "../interfaces/AppointmentInterface";
import { getUserByIdService } from "./usersServices";

const appointments: IAppointment[] = [];
let identificador: number = 1;

export const getAppointmentService = async (): Promise<IAppointment[]> => {
  return appointments;
};

export const getAppointementByIdService = async (
  id: number
): Promise<IAppointment> => {
  const appointmentFound = appointments.find((app) => app.id === id);
  if (!appointmentFound) throw Error(`La cita con Id: ${id} no fue encontrada`);
  return appointmentFound;
};

export const registerAppointmentService = async (
  appointment: AppointmentRegisterDTO
): Promise<IAppointment> => {
  const userFound = await getUserByIdService(appointment.userId);

  const appointmetnFound = appointments.find(
    (app) =>
      app.userId === appointment.userId &&
      app.time === appointment.time &&
      new Date(app.date).getTime() === new Date(appointment.date).getTime()
  );
  if (appointmetnFound) throw Error(`La cita ya existe`);

  const newAppointment: IAppointment = {
    id: identificador++,
    date: appointment.date,
    time: appointment.time,
    status: Status.active,
    userId: userFound?.id || 0,
  };
  appointments.push(newAppointment);
  return newAppointment;
};

export const cancelAppointemtnsService = async (id: number): Promise<void> => {
  const appointmentFound = await getAppointementByIdService(id);
  appointmentFound.status = Status.cancelled;
};
