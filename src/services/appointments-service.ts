import appointmentsRepository from "../repositories/appointments-repository.js"

async function createAppointment(userid: number, scheduleid: number, status: string) {

  const appointment = appointmentsRepository.createAppointment(
    userid,
    scheduleid,
    status
  )
  return appointment
}

const appointmentsService = {
  createAppointment,
};

export default appointmentsService;