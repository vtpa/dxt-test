import { PrismaProductsRepository } from "../../repositories/prisma/prisma-products-repository"
import { RegisterProductUseCase } from "../products/register"

export function makeProductRegisterUseCase() {
  const productsRepository = new PrismaProductsRepository()
  const registerProductUseCase = new RegisterProductUseCase(productsRepository)

  return registerProductUseCase
}