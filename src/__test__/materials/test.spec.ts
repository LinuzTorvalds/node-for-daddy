import { material, PrismaClient } from '@prisma/client'
import moment from 'moment'

describe('nada º~º', () => {
  it('test 0_0', async () => {
    const prisma = new PrismaClient()

    let materials: material[]

    materials = await prisma.material.findMany()

    let listMaterials = []

    for (let material of materials) {
      const shelf_life = moment(material.shelf_life).add(1, 'days')

      const diffDays = moment(shelf_life).diff(new Date(), 'days')

      listMaterials.push({ ...material, diffDays })
    }

    console.log(listMaterials)
  })
})
