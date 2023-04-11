import prisma from "../database/database.js";

async function getScheduleByServiceId (serviceId: number) {
  const scheduleWithService = await prisma.schedule.findMany({
   where: { serviceId },
   include: {
    service: true
   }
  })
   return scheduleWithService
};

 async function getSchedule () {
   const schedule = await prisma.schedule.findMany()
   return schedule
 };

 const scheduleRepository = {
  getScheduleByServiceId,
  getSchedule
};

export default scheduleRepository;
