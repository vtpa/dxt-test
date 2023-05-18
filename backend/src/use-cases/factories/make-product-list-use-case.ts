import { PrismaProductsRepository } from "../../repositories/prisma/prisma-products-repository"
import { ListProductsUseCase } from "../products/list"

export function makeProductListUseCase() {
  const productsRepository = new PrismaProductsRepository()
  const listProductUseCase = new ListProductsUseCase(productsRepository)

  return listProductUseCase
}