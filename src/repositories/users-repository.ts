import prisma from "../database/database.js"

async function create(name: string, email: string, password: string, phone: string) {
  await prisma.user.create({
    data: {
      name,
      email,
      password,
      phone,
    }
  })
}

async function findUserByEmail(email: string, password: string) {
  const user = await prisma.user.findFirst({
    where: {
      email: email,
    }
  })
  return user
}

async function findSessionByUserId(userId: number) {
  const token = await prisma.session.findFirst({
    where: {
      userid: userId,
    }
  })
  return token
}

async function createSession(userId: number, token: string) {
  const newToken = await prisma.session.create({
    data: {
      userid: userId,
      token,
    }
  })
  return newToken
}

const userRepository = {
  create,
  findUserByEmail,
  findSessionByUserId,
  createSession,
}

export default userRepository
