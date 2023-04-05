import userRepository from "../repositories/users-repository.js";
import bcrypt from "bcrypt"
import { NotFoundError, Unauthorized } from "../errors/errors.js";
import { v4 as uuid } from "uuid";



async function createUser(name: string, email: string, password: string , phone: string) {
  const hashedPassword = await bcrypt.hashSync(password, 12);
  
  const user = userRepository.create(
    name, 
    email, 
    hashedPassword,
    phone
);
 return user;
};

async function loginUser ( email: string, password: string ) {
  const user = await userRepository.findUserWithEmail(email, password);
  const token = uuid()
  
   if(!user) {
   throw NotFoundError()
  }
  
  const passwordOk = bcrypt.compareSync(password, user.password)
  
  if(Number(passwordOk) === 0){
     throw Unauthorized()
  }
  const session = await userRepository.findToken(user.id)
   if(!session) {
    const newToken = await userRepository.createToken(user.id, token)
    return newToken.token
   }; 
  
   return session.token
};

const userService = {
  createUser,
  loginUser
};

export default userService;