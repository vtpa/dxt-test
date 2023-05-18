import { PrismaProductsRepository } from "../../repositories/prisma/prisma-products-repository"
import { DeleteProductUseCase } from "../products/delete"

export function makeProductDeleteUseCase() {
  const productsRepository = new PrismaProductsRepository()
  const deleteProductUseCase = new DeleteProductUseCase(productsRepository)

  return deleteProductUseCase
}