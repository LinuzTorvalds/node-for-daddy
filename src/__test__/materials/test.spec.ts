import { PrismaClient, reports } from '@prisma/client'
import moment from 'moment'

describe('nada º~º', () => {
  it('test 0_0', async () => {
    const prisma = new PrismaClient()

    const EndDay = new Date()

    const Days = 30

    const StartDay = moment(EndDay).subtract(Days, 'days').toDate()

    let data: reports = await prisma.$queryRaw<reports>`
      select * from reports where description = ${'Ab'} and lote = ${'cd'} and (day between ${new Date(
      StartDay
    )} and ${new Date(EndDay)})`.finally(() => prisma.$disconnect())

    let report = { title: '', data: {} }

    report.title = (
      'Decorridos: ' +
      Days +
      ' dias a partir da data: ' +
      moment(StartDay).format('DD-MM-YYYY') +
      ' até ' +
      moment(EndDay).format('DD-MM-YYYY')
    ).toString()

    report.data = data

    console.log(report.data[0])
  })
})
