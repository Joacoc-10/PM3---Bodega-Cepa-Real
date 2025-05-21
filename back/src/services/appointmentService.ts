import { AppointmentRegisterDTO } from "../dtos/AppointmentsDTO";
import { Appointment } from "../entities/Appointment.entity";
import { AppointmentModel } from "../repositories/Appointment.Repository";
import { getUserByIdService } from "./usersServices";
import { Status } from "../interfaces/AppointmentInterface";

export const getAppointmentService = async (): Promise<Appointment[]> => {
  const appointments: Appointment[] = await AppointmentModel.find();
  if (appointments.length === 0) throw new Error(` No hay citas registradas`);
  return appointments;
  // return await AppointmentModel.find();
};

export const getAppointementByIdService = async (
  id: number
): Promise<Appointment> => {
  const appointmentFound = await AppointmentModel.findOne({ where: { id } });
  if (!appointmentFound) throw Error(`La cita con Id: ${id} no fue encontrada`);
  return appointmentFound;
};

export const registerAppointmentService = async (
  appointment: AppointmentRegisterDTO
): Promise<Appointment> => {
  await getUserByIdService(appointment.userId);

  AppointmentModel.validateAllowAppointment(appointment.date, appointment.time);
  await AppointmentModel.validateExistingAppointment(
    appointment.userId,
    appointment.date,
    appointment.time
  );

  const newAppointment = await AppointmentModel.create({
    date: appointment.date,
    time: appointment.time,
    user: {
      id: appointment.userId,
    },
  });

  // const appointmetnFound = appointments.find(
  //   (app) =>
  //     app.userId === appointment.userId &&
  //     app.time === appointment.time &&
  //     new Date(app.date).getTime() === new Date(appointment.date).getTime()
  // );
  // if (appointmetnFound) throw Error(`La cita ya existe`);

  // const newAppointment: IAppointment = {
  //   date: appointment.date,
  //   time: appointment.time,
  //   status: Status.active,
  //   userId: userFound?.id || 0,
  // };
  // appointments.push(newAppointment);
  // return newAppointment;
  return await AppointmentModel.save(newAppointment);
};

export const cancelAppointemtnsService = async (id: number): Promise<void> => {
  const appointmentFound = await AppointmentModel.findOne({
    where: { id },
  });
  if (!appointmentFound) throw Error(`La reserva con Id: ${id} no existe`);
  appointmentFound.status = Status.cancelled;
  await AppointmentModel.save(appointmentFound);
};
