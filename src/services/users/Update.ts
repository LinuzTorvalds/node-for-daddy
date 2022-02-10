import { PrismaClient } from '@prisma/client'
import { hash } from 'bcryptjs'

type userRequest = {
  Name: string
  Email: string
  Password: string
}

export default class UpdateUserService {
  async execute(Code: string, { Name, Email, Password }: userRequest) {
    const prisma = new PrismaClient()

    if (!Code) throw new Error('Code incorrect')

    const passwordHash = await hash(Password, 8)

    const user = await prisma.users
      .update({
        data: {
          name: Name,
          email: Email,
          password: passwordHash,
        },
        where: { code: Code },
      })
      .finally(() => prisma.$disconnect())

    const userFind = {
      code: user.code,
      name: user.name,
      email: Email,
    }

    prisma.$disconnect()

    return userFind
  }
}
