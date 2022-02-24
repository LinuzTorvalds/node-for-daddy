import { material, PrismaClient } from '@prisma/client'
import moment from 'moment'

describe('nada º~º', () => {
  it('test 0_0', async () => {
    const prisma = new PrismaClient()

    const EndDay = new Date()

    const Days = 30

    const StartDay = moment(EndDay).subtract(Days, 'days').toDate()

    let material =
      await prisma.$queryRaw`select * from reports where day between ${new Date(
        StartDay
      )} and ${new Date(EndDay)}`.finally(() => prisma.$disconnect())

    console.log(material)
  })
})
