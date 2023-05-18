
import { Product } from '@prisma/client'
import { ProductsRepository } from '../../repositories/products-repository'

interface ListProductsUseCaseResponse {
  products: Product[]
}

export class ListProductsUseCase {
  constructor(private productsRepository: ProductsRepository) {}

  async execute(): Promise<ListProductsUseCaseResponse> {
    const products = await this.productsRepository.findMany()

    return {
      products,
    }
  }
}