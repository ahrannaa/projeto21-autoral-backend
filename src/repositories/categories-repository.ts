import prisma from "../database/database.js";

async function getCategories() {
  const categories = await prisma.category.findMany()
   return categories
};

async function getCategoriesWithService(categoryId:number) {
  const categories = await prisma.category.findFirst({
    where: { id: categoryId },
    include: {
      service: true,
    },
  });
   return categories
};
const categoryRepository = {
  getCategories,
  getCategoriesWithService
};

export default categoryRepository;