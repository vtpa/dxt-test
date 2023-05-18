import { PrismaProductsRepository } from "../../repositories/prisma/prisma-products-repository"
import { UpdateProductUseCase } from "../products/update"

export function makeProductUpdateUseCase() {
  const productsRepository = new PrismaProductsRepository()
  const updateProductUseCase = new UpdateProductUseCase(productsRepository)

  return updateProductUseCase
}