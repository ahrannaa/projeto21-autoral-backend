import prisma from "../database/database.js";

async function createAppointment (userid: number, scheduleid: number, status: string){
  const appointment = await prisma.appointment.create({
    data: {
      userid, 
      scheduleid, 
      status,
    }
  })
};

const appointmentsRepository = {
  createAppointment,
};

export default appointmentsRepository;