import scheduleRepository from "../repositories/schedule-repository.js";
import { NotFoundError } from "../errors/errors.js";

async function getSchedule (userId:number) {
  const schedule = await scheduleRepository.getSchedule()
   
  if(!schedule){
    throw NotFoundError
  }
   return schedule
};

async function findScheduleWithService(serviceId: number) {
  const scheduleWithService= await scheduleRepository.getScheduleByServiceId(serviceId)
   
  if(!scheduleWithService){
    throw NotFoundError
  }
   return scheduleWithService
};

const scheduleService = {
  getSchedule,
  findScheduleWithService
};

export default scheduleService;