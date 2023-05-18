
import { Product } from '@prisma/client'
import { ProductsRepository } from '../../repositories/products-repository'

interface RegisterProductUseCaseRequest {
  title: string;
  description: string;
  price: number;
  amount: number;
}

interface RegisterProductUseCaseResponse {
  product: Product
}

export class RegisterProductUseCase {
  constructor(private productsRepository: ProductsRepository) {}

  async execute({
    title,
    description,
    price,
    amount
  }: RegisterProductUseCaseRequest): Promise<RegisterProductUseCaseResponse> {
    const product = await this.productsRepository.create({
      title,
      description,
      price,
      amount
    })

    return {
      product,
    }
  }
}