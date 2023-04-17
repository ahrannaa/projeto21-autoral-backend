import prisma from "../database/database.js";

async function getServicesWithSchedule(serviceId:number) {
  const services = await prisma.service.findMany({
    where: { id: serviceId },
    include: {
      schedule: true,
    },
  });
   return services
};

const servicesRepository = {
  getServicesWithSchedule
 };
 
 export default servicesRepository;
 