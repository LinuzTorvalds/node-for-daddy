import { PrismaClient } from '@prisma/client'
import moment from 'moment'

type materialRequest = {
  Lote: string
  Description: string
  Amount: number
  Shelf_life: Date
}

export default class CreateMaterialService {
  async execute({ Lote, Description, Amount, Shelf_life }: materialRequest) {
    const prisma = new PrismaClient()

    if (!Lote) throw new Error('Lote incorrect')

    const materialAlreadyExists = await prisma.material.findUnique({
      where: { lote: Lote },
    })

    if (materialAlreadyExists) throw new Error('Material already exists')

    const material = await prisma.material.create({
      data: {
        lote: Lote,
        description: Description,
        amount: Amount,
        shelf_life: new Date(Shelf_life),
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
