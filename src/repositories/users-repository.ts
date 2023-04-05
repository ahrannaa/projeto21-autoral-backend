import prisma from "../database/database.js";


async function create (name: string, email: string, password: string, phone: string){
  const user = await prisma.user.create({
    data: {
      name, email, password, phone
    }
  })
};

async function findUserWithEmail (email: string, password: string){
  const user = await prisma.user.findFirst({
   where: {
     email: email
  }
  })
   return user
};

 async function findToken (id:number) {
  const token = await prisma.session.findFirst({
    where: {
      userid: id
    }
  })
   return token 
 };

 async function createToken (id:number, token: string) {
   const newToken = await prisma.session.create({
     data: {
       userid: id,
       token
     }
   })
   return newToken
 };

 const userRepository = {
 create,
 findUserWithEmail,
 findToken,
 createToken
};

export default userRepository;
