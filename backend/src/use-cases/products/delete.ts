
import { ProductsRepository } from '../../repositories/products-repository'

interface DeleteProductUseCaseRequest {
  id: string;
}

export class DeleteProductUseCase {
  constructor(private productsRepository: ProductsRepository) {}

  async execute({
    id
  }: DeleteProductUseCaseRequest): Promise<void> {
    await this.productsRepository.delete(id)
    return
  }
}