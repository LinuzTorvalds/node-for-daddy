import { PrismaClient } from '@prisma/client'
import { response } from 'express'

export default class CreateMaterialService {
  async execute(Lote: string) {
    const prisma = new PrismaClient()

    if (!Lote) throw new Error('Lote incorrect')

    await prisma.material.delete({
      where: { lote: Lote },
    })

    prisma.$disconnect()

    return response.status(200).json().send('successfully delete :D')
  }
}
