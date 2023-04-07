import { NotFoundError } from "../errors/errors.js";
import servicesRepository from "../repositories/services-repository.js";

async function findServicesWithCategoryId(categoryId: number) {
  const services = await servicesRepository.getServicesWithCategorieId(categoryId)
   
  if(!services){
    throw NotFoundError
  }
   return services
};

const serviceService = {
  findServicesWithCategoryId
};

export default serviceService;