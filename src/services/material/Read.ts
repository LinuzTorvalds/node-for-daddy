import { PrismaClient } from '@prisma/client'
import moment from 'moment'

export default class ReadMaterialService {
  async execute(Id: string) {
    const prisma = new PrismaClient()

    const material = await prisma.material
      .findUnique({
        where: { id: Id },
      })
      .finally(() => prisma.$disconnect())

    if (material) throw new Error('Not found material')

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
