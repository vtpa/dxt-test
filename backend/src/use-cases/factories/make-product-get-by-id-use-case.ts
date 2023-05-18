import { PrismaProductsRepository } from "../../repositories/prisma/prisma-products-repository"
import { GetByIdProductUseCase } from "../products/getById"

export function makeProductGetByIdUseCase() {
  const productsRepository = new PrismaProductsRepository()
  const getByIdProductUseCase = new GetByIdProductUseCase(productsRepository)

  return getByIdProductUseCase
}