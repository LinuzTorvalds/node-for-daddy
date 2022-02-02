import { PrismaClient } from '@prisma/client'

type materialRequest = {
  Description: string
  Amount: number
  Shelf_life: Date
}

export default class UpdateMaterialService {
  async execute(
    Lote: string,
    { Description, Amount, Shelf_life }: materialRequest
  ) {
    const prisma = new PrismaClient()

    if (!Lote) throw new Error('Lote incorrect')

    const material = await prisma.material.update({
      data: {
        description: Description,
        amount: Amount,
        shelf_life: new Date(Shelf_life),
      },
      where: {
        lote: Lote,
      },
    })

    prisma.$disconnect()

    return material
  }
}
