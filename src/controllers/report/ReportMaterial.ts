import { Request, Response } from 'express'
import ReportMaterialService from '../../services/report/ReportMaterial'

export default class ReportMaterialControl {
  async handle(request: Request, response: Response) {
    const { Description, Lote, Days, EndDay } = request.body

    const reportMaterialService = new ReportMaterialService()

    const report = await reportMaterialService.execute({
      Description,
      Lote,
      Days,
      EndDay,
    })

    return response.send(report)
  }
}
