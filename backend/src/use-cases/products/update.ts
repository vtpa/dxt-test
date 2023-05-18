
import { Prisma, Product } from '@prisma/client'
import { ProductsRepository } from '../../repositories/products-repository'

interface UpdateProductUseCaseRequest extends Prisma.ProductUpdateInput {
  id: string;
}

interface UpdateProductUseCaseResponse {
  product: Product
}

export class UpdateProductUseCase {
  constructor(private productsRepository: ProductsRepository) {}

  async execute({
    id,
    title,
    description,
    price,
    amount
  }: UpdateProductUseCaseRequest): Promise<UpdateProductUseCaseResponse> {
    const product = await this.productsRepository.update(id, {
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