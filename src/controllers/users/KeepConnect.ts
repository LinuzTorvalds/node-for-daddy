import { Request, Response } from 'express'
import KeepConectService from '../../services/users/KeepConnect'

export default class KeepConnectUserControl {
  async handle(request: Request, response: Response) {
    const { Token } = request.body

    const keepConectService = new KeepConectService()

    const user = await keepConectService.execute({ Token })

    return response.send(user)
  }
}
