import { Request, Response } from 'express'
import CreateMaterialService from '../../services/material/Create'

export default class CreateMaterialControl {
  async handle(request: Request, response: Response) {
    const { Lote, Description, Amount, Shelf_life } = request.body

    const createMaterialService = new CreateMaterialService()

    const material = await createMaterialService
      .execute({
        Lote,
        Description,
        Amount,
        Shelf_life,
      })
      .finally()

    return response.send(material)
  }
}
