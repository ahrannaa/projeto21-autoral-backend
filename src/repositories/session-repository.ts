import prisma from "../database/database.js";

async function findToken (token: string) {
   const session = await prisma.session.findFirst({
    where: { token } 
  });
  return session
}

const sessionRepository = {
  findToken
};

export default sessionRepository;