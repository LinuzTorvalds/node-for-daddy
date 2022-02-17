import { material, PrismaClient } from '@prisma/client'
import moment from 'moment'
import { v4 as uuid } from 'uuid'

type materialRequest = {
  Code: string
  Lote: string
  Description: string
  Amount: number
  Shelf_life: Date
}

export default class CreateMaterialService {
  async execute({
    Code,
    Lote,
    Description,
    Amount,
    Shelf_life,
  }: materialRequest) {
    const prisma = new PrismaClient()

    if (!Lote) throw new Error('Lote incorrect')

    const data = await prisma.material.findFirst({
      where: { lote: Lote, AND: { shelf_life: new Date(Shelf_life) } },
    })

    let material: material

    if (data != null) {
      material = await prisma.material
        .update({
          data: {
            amount: data.amount + Amount,
          },
          where: { id: data.id },
        })
        .finally(() => prisma.$disconnect())
    } else {
      material = await prisma.material
        .create({
          data: {
            id: uuid(),
            code: Code,
            lote: Lote,
            description: Description,
            amount: Amount,
            shelf_life: new Date(Shelf_life),
          },
        })
        .finally(() => prisma.$disconnect())
    }

    const materialFind = {
      code: material.code,
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
