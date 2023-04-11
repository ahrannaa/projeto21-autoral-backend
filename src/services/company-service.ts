import companyRepository from "../repositories/company-repository.js";
import { NotFoundError } from "../errors/errors.js";

async function findCompany(userId:number) {
  const company = await companyRepository.getCompanys()
   
  if(!company){
    throw NotFoundError
  }
   return company
};

async function findCompanyWithService(companyId: number) {
  const company = await companyRepository.getCompanyWithService(companyId)
   
  if(!company){
    throw NotFoundError
  }
   return company
};

const companyService = {
  findCompany,
  findCompanyWithService
};

export default companyService;