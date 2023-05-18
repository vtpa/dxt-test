
import { Product } from '@prisma/client'
import { ProductsRepository } from '../../repositories/products-repository'

interface GetByIdProductUseCaseRequest {
  id: string;
}

interface GetByIdProductUseCaseResponse {
  product: Product | null
}

export class GetByIdProductUseCase {
  constructor(private productsRepository: ProductsRepository) {}

  async execute({
    id
  }: GetByIdProductUseCaseRequest): Promise<GetByIdProductUseCaseResponse> {
    const product = await this.productsRepository.findById(id)

    return {
      product,
    }
  }
}