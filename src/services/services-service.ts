import { NotFoundError } from "../errors/errors.js";
import servicesRepository from "../repositories/services-repository.js";

async function findServicesWithSchedule(serviceId: number) {
  const services = await servicesRepository.getServicesWithSchedule(serviceId)
   
  if(!services){
    throw NotFoundError
  }
   return services
};

const serviceService = {
 findServicesWithSchedule
};

export default serviceService;