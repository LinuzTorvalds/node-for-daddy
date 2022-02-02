import { Request, Response } from 'express'
import UpdateMaterialService from '../../services/material/Update'

export default class UpdateMaterialControl {
  async handle(request: Request, response: Response) {
    const { Lote } = request.params
    const { Description, Amount, Shelf_life } = request.body

    const updateMaterialService = new UpdateMaterialService()

    const material = await updateMaterialService
      .execute(Lote, {
        Description,
        Amount,
        Shelf_life,
      })
      .finally()

    return response.send(material)
  }
}
