import { material, PrismaClient } from '@prisma/client'
import moment from 'moment'

export default class ReadMaterialService {
  async execute(Lote: string) {
    const prisma = new PrismaClient()

    const material = await prisma.material.findUnique({
      where: { lote: Lote },
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
