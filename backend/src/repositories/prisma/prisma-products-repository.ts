import { Prisma, Product } from "@prisma/client";
import { ProductsRepository } from "../products-repository";
import { prismaClientDatabase } from "../../database";

export class PrismaProductsRepository implements ProductsRepository {
  async delete(id: string): Promise<void> {
    await prismaClientDatabase.product.delete({ where: { id }})
  }
  async update(id: string, data: Prisma.ProductUpdateInput){
    const updatedProduct = await prismaClientDatabase.product.update({ data, where: { id } })
    return updatedProduct
  }
  async findById(id: string): Promise<Product | null> {
    const product = await prismaClientDatabase.product.findFirst({ where: { id } })
    return product
  }

  async findMany(): Promise<Product[]> {
    const products = await prismaClientDatabase.product.findMany()
    return products
  }

  async create(data: Prisma.ProductCreateInput) {
    const product = await prismaClientDatabase.product.create({
      data,
    })
    return product
  }
}
