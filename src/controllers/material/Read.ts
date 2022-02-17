import { Request, Response } from 'express'
import ReadMaterialService from '../../services/material/Read'

export default class ReadMaterialControl {
  async handle(request: Request, response: Response) {
    const { Id } = request.params

    const readMaterialService = new ReadMaterialService()

    const material = await readMaterialService.execute(Id)

    return response.send(material)
  }
}
