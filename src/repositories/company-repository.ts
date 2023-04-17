import prisma from "../database/database.js";

async function getCompanys() {
  const companys = await prisma.company.findMany()
   return companys
};

async function getCompanyWithService(companyId:number) {
  const company = await prisma.company.findFirst({
    where: { id: companyId },
    include: {
      service: true,
    },
  });
   return company
};

async function getCompanyWithCategories(companyId:number) {
  const company = await prisma.company.findFirst({
    where: { id: companyId },
    include: {
      category: true,
    },
  });
   return company
};

const companyRepository = {
   getCompanys,
   getCompanyWithService,
   getCompanyWithCategories
 };
 
 export default companyRepository