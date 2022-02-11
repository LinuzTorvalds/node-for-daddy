import { Request, Response } from 'express'
import ReadMaterialService from '../../services/material/Read'

export default class ReadMaterialControl {
  async handle(request: Request, response: Response) {
    const { Lote } = request.params

    const readMaterialService = new ReadMaterialService()

    const material = await readMaterialService.execute(Lote)

    return response.send(material)
  }
}
