import { PrismaOrdersRepository } from "../../repositories/prisma/prisma-orders-repository"
import { RegisterOrderUseCase } from "../orders/register"

export function makeOrderRegisterUseCase() {
  const ordersRepository = new PrismaOrdersRepository()
  const registerOrderUseCase = new RegisterOrderUseCase(ordersRepository)

  return registerOrderUseCase
}