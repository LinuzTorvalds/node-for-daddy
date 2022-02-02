import { PrismaClient } from '@prisma/client'
import { v4 as uuid } from 'uuid'
import { hash } from 'bcryptjs'

type userRequest = {
  Name: string
  Email: string
  Password: string
}

export default class SignUpUserService {
  async execute({ Name, Email, Password }: userRequest) {
    const prisma = new PrismaClient()

    if (!Email) throw new Error('Email incorrect')

    const userAlreadyExists = await prisma.users.findUnique({
      where: { email: Email },
    })

    if (userAlreadyExists) throw new Error('User already exists')

    const passwordHash = await hash(Password, 8)

    const user = await prisma.users.create({
      data: {
        code: uuid(),
        name: Name,
        email: Email,
        password: passwordHash,
      },
    })

    const userFind = {
      code: user.code,
      name: user.name,
      email: Email,
    }

    prisma.$disconnect()

    return userFind
  }
}