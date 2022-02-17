import { Request, Response } from 'express'
import DeleteMaterialService from '../../services/material/Delete'

export default class DeleteMaterialControl {
  async handle(request: Request, response: Response) {
    const { Id } = request.params

    const deleteMaterialService = new DeleteMaterialService()

    await deleteMaterialService.execute(Id)

    return response.status(201).send('successfully delete :D')
  }
}
