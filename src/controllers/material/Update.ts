import { Request, Response } from 'express'
import UpdateMaterialService from '../../services/material/Update'

export default class UpdateMaterialControl {
  async handle(request: Request, response: Response) {
    const { Id } = request.params
    const { Code, Lote, Description, Amount, Shelf_life } = request.body

    const updateMaterialService = new UpdateMaterialService()

    const material = await updateMaterialService.execute(Id, {
      Code,
      Lote,
      Description,
      Amount,
      Shelf_life,
    })

    return response.send(material)
  }
}
