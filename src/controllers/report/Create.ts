import { Request, Response } from 'express'
import CreateReportService from '../../services/report/Create'

export default class CreateReportControl {
  async handle(request: Request, response: Response) {
    const { Lote, Description, Amount, Day } = request.body

    const createReportService = new CreateReportService()

    const report = await createReportService.execute({
      Lote,
      Description,
      Amount,
      Day,
    })

    return response.send(report)
  }
}
