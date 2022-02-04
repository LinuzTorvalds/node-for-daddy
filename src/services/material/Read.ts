import { material, PrismaClient } from '@prisma/client'
import moment from 'moment'

export default class ReadMaterialService {
  async execute(Lote: string) {
    const prisma = new PrismaClient()

    const material = await prisma.material.findUnique({
      where: { lote: Lote },
    })

    prisma.$disconnect()

    return material
  }
}
