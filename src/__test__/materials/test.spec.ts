import { material, PrismaClient } from '@prisma/client'
import moment from 'moment'

describe('nada º~º', () => {
  it('test 0_0', async () => {
    const prisma = new PrismaClient()

    const EndDay = new Date()

    const Days = 30

    const StartDay = moment(EndDay).subtract(Days, 'days').toDate()

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

    console.log(material)
  })
})
