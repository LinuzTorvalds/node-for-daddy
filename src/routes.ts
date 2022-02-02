import { Request, Response, Router } from 'express'

const router = Router()

//test
router.get('/', (request: Request, response: Response) => {
  response.send('Ready :) ^-^')
})

export default router
