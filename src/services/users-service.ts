import userRepository from "../repositories/users-repository.js"
import bcrypt from "bcrypt"
import { NotFoundError, Unauthorized } from "../errors/errors.js"
import { v4 as uuid } from "uuid"

async function createUser(name: string, email: string, password: string, phone: string) {
  const hashedPassword = await bcrypt.hashSync(password, 12)

  const user = userRepository.create(
    name,
    email,
    hashedPassword,
    phone
  )
  return user
}

async function loginUser(email: string, password: string) {
  const user = await userRepository.findUserByEmail(email, password)

  if (!user) {
    throw NotFoundError()
  }

  const pswAreEquals = bcrypt.compareSync(password, user.password)

  if (!pswAreEquals) {
    throw Unauthorized()
  }

  let session = await userRepository.findSessionByUserId(user.id)

  if (!session) {
    session = await userRepository.createSession(user.id, uuid())
  }

  return {
    token: session.token,
    userId: user.id,
  }
}

const userService = {
  createUser,
  loginUser
}

export default userService