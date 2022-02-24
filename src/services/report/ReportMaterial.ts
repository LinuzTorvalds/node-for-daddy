import { PrismaClient } from '@prisma/client'
import moment from 'moment'

type reportRequest = {
  Description: string
  Lote: string
  Days: number
  EndDay: Date
}

export default class ReportMaterialService {
  async execute({ Description, Lote, Days, EndDay }: reportRequest) {
    const prisma = new PrismaClient()

    let StartDay: Date

    if (EndDay != null)
      StartDay = moment(EndDay).subtract(Days, 'days').toDate()
    else {
      EndDay = new Date()
      StartDay = moment(EndDay).subtract(Days, 'days').toDate()
    }

    let material = await prisma.$queryRaw`
      select * from reports where description = ${Description} and lote = ${Lote} and (day between ${new Date(
      StartDay
    )} and ${new Date(EndDay)})`.finally(() => prisma.$disconnect())

    return material
  }
}
