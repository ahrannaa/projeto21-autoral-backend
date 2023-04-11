import { NotFoundError } from "../errors/errors.js";
import categoryRepository from "../repositories/categories-repository.js";

async function findCategories(userId:number) {
  const categories = await categoryRepository.getCategories()
   
  if(!categories){
    throw NotFoundError
  }
   return categories
};

const categoryService = {
  findCategories
};

export default categoryService;