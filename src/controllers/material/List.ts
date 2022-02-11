import { Request, Response } from 'express'
import ListMaterialService from '../../services/material/List'

export default class ListMaterialControl {
  async handle(request: Request, response: Response) {
    const listMaterialService = new ListMaterialService()

    const material = await listMaterialService.execute()

    return response.send(material)
  }
}
