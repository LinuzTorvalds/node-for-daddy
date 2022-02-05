import { PrismaClient } from '@prisma/client'

type reportRequest = {
  StartDay: Date
  EndDay: Date
}

export default class ReportTimeService {
  async execute({ StartDay, EndDay }) {
    const prisma = new PrismaClient()

    const material =
      await prisma.$queryRaw`select * from reports where day between ${new Date(
        StartDay
      )} and ${new Date(EndDay)}`

    prisma.$disconnect()

    return material
  }
}
