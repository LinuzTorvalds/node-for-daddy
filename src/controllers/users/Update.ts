import { Request, Response } from 'express'
import UpdateUserService from '../../services/users/Update'

export default class UpdateUserControl {
  async handle(request: Request, response: Response) {
    const { Code } = request.params
    const { Name, Email, Password } = request.body

    const updateUserService = new UpdateUserService()

    await updateUserService
      .execute(Code, {
        Name,
        Email,
        Password,
      })
      .finally()

    return response.status(201).send('successfully updated :D')
  }
}
