import { Request, Response } from 'express'
import UpdateReportService from '../../services/report/Update'

export default class UpdateReportControl {
  async handle(request: Request, response: Response) {
    const { Code } = request.params
    const { Lote, Description, Amount, Day } = request.body

    const updateReportService = new UpdateReportService()

    await updateReportService.execute(Code, { Lote, Description, Amount, Day })

    return response.status(201).send('successfully updated :D')
  }
}
