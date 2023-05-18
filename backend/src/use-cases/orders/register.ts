
import { Order, Prisma } from '@prisma/client'
import { OrdersRepository } from '../../repositories/orders-repository';

interface RegisterOrderUseCaseRequest {
  products: string[]
}

interface RegisterOrderUseCaseResponse {
  order: Order
}

export class RegisterOrderUseCase {
  constructor(private ordersRepository: OrdersRepository) {}

  async execute({
    products
  }: RegisterOrderUseCaseRequest): Promise<RegisterOrderUseCaseResponse> {
    const order = await this.ordersRepository.create({
      products
    })

    return {
      order,
    }
  }
}