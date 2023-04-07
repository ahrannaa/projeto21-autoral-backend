import prisma from "../database/database.js";

async function getServicesWithCategorieId(categoryId:number) {
  const services = await prisma.service.findMany({
    where: {
      categoryId
    }
  })
   return services
};

const servicesRepository = {
  getServicesWithCategorieId
 };
 
 export default servicesRepository;
 