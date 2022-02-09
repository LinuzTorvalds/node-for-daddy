import { PrismaClient } from '@prisma/client'
import moment from 'moment'

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

    const materialFind = {
      lote: material.lote,
      description: material.description,
      amount: material.amount,
      shelf_life: moment(material.shelf_life)
        .add(1, 'days')
        .format('YYYY-MM-DD'),
    }

    return materialFind
  }
}
