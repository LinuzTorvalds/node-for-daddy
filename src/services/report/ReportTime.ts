import { PrismaClient } from '@prisma/client'
import moment from 'moment'

type reportRequest = {
  Days: number
  EndDay: Date
}
export default class ReportTimeService {
  async execute({ Days, EndDay }: reportRequest) {
    const prisma = new PrismaClient()

    let StartDay: Date

    if (EndDay != null)
      StartDay = moment(EndDay).subtract(Days, 'days').toDate()
    else {
      EndDay = new Date()
      StartDay = moment(EndDay).subtract(Days, 'days').toDate()
    }

    let material: any =
      await prisma.$queryRaw`select * from reports where day between ${new Date(
        StartDay
      )} and ${new Date(EndDay)}`.finally(() => prisma.$disconnect())

    material = {
      ...material,
      title:
        'Decorridos: ' +
        Days +
        ' dias a partir da data: ' +
        moment(StartDay).format('DD-MM-YYYY') +
        ' até ' +
        moment(EndDay).format('DD-MM-YYYY'),
    }

    return material
  }
}
