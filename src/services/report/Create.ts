import { PrismaClient, reports } from '@prisma/client'
import { v4 as uuid } from 'uuid'

type reportRequest = {
  Lote: string
  Description: string
  Amount: number
  Day: Date
}

export default class CreateReportService {
  async execute({ Lote, Description, Amount, Day }: reportRequest) {
    const prisma = new PrismaClient()

    const data = await prisma.reports.findFirst({
      where: {
        day: new Date(Day),
        AND: { description: Description },
      },
    })

    let report: reports

    if (data != null) {
      report = await prisma.reports.update({
        data: {
          lote: Lote,
          description: Description,
          amount: data.amount + Amount,
          day: new Date(Day),
        },
        where: { code: data.code },
      })
    } else {
      report = await prisma.reports.create({
        data: {
          code: uuid(),
          lote: Lote,
          description: Description,
          amount: Amount,
          day: new Date(Day),
        },
      })
    }

    return report
  }
}
