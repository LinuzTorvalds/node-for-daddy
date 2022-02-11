import { Request, Response } from 'express'
import ReportMaterialService from '../../services/report/ReportMaterial'

export default class ReportMaterialControl {
  async handle(request: Request, response: Response) {
    const { Description, Lote, StartDay, EndDay } = request.body

    const reportMaterialService = new ReportMaterialService()

    const report = await reportMaterialService.execute({
      Description,
      Lote,
      StartDay,
      EndDay,
    })

    return response.send(report)
  }
}
