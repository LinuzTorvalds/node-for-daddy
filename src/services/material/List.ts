import { material, PrismaClient } from '@prisma/client'
import moment from 'moment'

export default class ListMaterialService {
  async execute() {
    const prisma = new PrismaClient()

    let materials: material[]

    materials = await prisma.material
      .findMany()
      .finally(() => prisma.$disconnect())

    let listMaterials = []

    for (let material of materials) {
      const shelf_life = moment(material.shelf_life).add(1, 'days')

      const diffDays = moment(shelf_life).diff(new Date(), 'days')

      listMaterials.push({ ...material, diffDays })
    }

    return listMaterials
  }
}
