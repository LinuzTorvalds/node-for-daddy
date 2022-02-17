import { PrismaClient } from '@prisma/client'

export default class DeleteMaterialService {
  async execute(Id: string) {
    const prisma = new PrismaClient()

    if (!Id) throw new Error('Id incorrect')

    const material = await prisma.material
      .delete({
        where: { id: Id },
      })
      .finally(() => prisma.$disconnect())

    return material
  }
}
