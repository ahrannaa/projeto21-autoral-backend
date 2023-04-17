import { NotFoundError } from "../errors/errors.js";
import categoryRepository from "../repositories/categories-repository.js";

async function findCategories(userId:number) {
  const categories = await categoryRepository.getCategories()
   
  if(!categories){
    throw NotFoundError
  }
   return categories
};

async function findCategoriesWithService(categoryId: number) {
  const category = await categoryRepository.getCategoriesWithService(categoryId)
   
  if(!category){
    throw NotFoundError
  }
   return category
};

const categoryService = {
  findCategories,
  findCategoriesWithService
};

export default categoryService;