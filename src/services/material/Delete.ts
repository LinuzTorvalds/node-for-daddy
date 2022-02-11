import { PrismaClient } from '@prisma/client'

export default class DeleteMaterialService {
  async execute(Lote: string) {
    const prisma = new PrismaClient()

    if (!Lote) throw new Error('Lote incorrect')

    const material = await prisma.material
      .delete({
        where: { lote: Lote },
      })
      .finally(() => prisma.$disconnect())

    return material
  }
}
