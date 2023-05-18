import { expect, describe, it, beforeEach } from 'vitest'

import { InMemoryProductsRepository } from '../../repositories/in-memory/in-memory-products-repository'
import { DeleteProductUseCase } from './delete'
import { ProductsRepository } from '../../repositories/products-repository'

let productsRepository: ProductsRepository
let sut: DeleteProductUseCase

describe('Update Product Use Case', () => {
  beforeEach(() => {
    productsRepository = new InMemoryProductsRepository()
    sut = new DeleteProductUseCase(productsRepository)
  })

  it('should be able to update a product', async () => {
    const createdProduct = await productsRepository.create({
      title: 'Title-test',
      description: 'Description-test',
      amount: 1,
      price: 1.99
    })

    await expect(() => sut.execute({ id: createdProduct.id })).not.Throw()
  })
})