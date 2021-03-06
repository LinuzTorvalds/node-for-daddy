import { Request, Response } from 'express'
import ReportTimeService from '../../services/report/ReportTime'

export default class ReportTimeControl {
  async handle(request: Request, response: Response) {
    const { Days, EndDay } = request.body

    const reportTimeService = new ReportTimeService()

    const report = await reportTimeService.execute({ Days, EndDay })

    return response.send(report)
  }
}
