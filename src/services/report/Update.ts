import { PrismaClient } from '@prisma/client'
import { v4 as uuid } from 'uuid'

type reportRequest = {
  Lote: string
  Description: string
  Amount: number
  Day: Date
}

export default class UpdateReportService {
  async execute(
    Code: string,
    { Lote, Description, Amount, Day }: reportRequest
  ) {
    const prisma = new PrismaClient()

    const report = await prisma.reports.update({
      data: {
        lote: Lote,
        description: Description,
        amount: Amount,
        day: new Date(Day),
      },
      where: { code: Code },
    })

    return report
  }
}
