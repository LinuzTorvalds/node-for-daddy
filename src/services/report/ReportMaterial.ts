import { PrismaClient } from '@prisma/client'

type reportRequest = {
  Description: string
  Lote: string
  StartDay: Date
  EndDay: Date
}

export default class ReportMaterialService {
  async execute({ Description, Lote, StartDay, EndDay }) {
    const prisma = new PrismaClient()

    const material = await prisma.$queryRaw`
      select * from reports where description = ${Description} and lote = ${Lote} and (day between ${new Date(
      StartDay
    )} and ${new Date(EndDay)})`.finally(() => prisma.$disconnect())

    return material
  }
}
