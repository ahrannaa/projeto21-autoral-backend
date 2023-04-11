import prisma from "../database/database.js";

async function getCategories() {
  const categories = await prisma.category.findMany()
   return categories
};

const categoryRepository = {
  getCategories
};

export default categoryRepository;