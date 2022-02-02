import { Request, Response } from 'express'
import DeleteMaterialService from '../../services/material/Delete'

export default class CreateMaterialControl {
  async handle(request: Request, response: Response) {
    const { Lote } = request.params

    const deleteMaterialService = new DeleteMaterialService()

    const material = await deleteMaterialService.execute(Lote).finally()

    return response.send(material)
  }
}
