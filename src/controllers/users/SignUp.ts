import { Request, Response } from 'express'
import SignUpUserService from '../../services/users/SignUp'

export default class SignUpUserControl {
  async handle(request: Request, response: Response) {
    const { Name, Email, Password } = request.body

    const signUpUserService = new SignUpUserService()

    const user = await signUpUserService
      .execute({
        Name,
        Email,
        Password,
      })
      .finally()

    return response.json(user)
  }
}
