import { expect, describe, it, beforeEach } from 'vitest'

import { InMemoryProductsRepository } from '../../repositories/in-memory/in-memory-products-repository'
import { GetByIdProductUseCase } from './getById'
import { ProductsRepository } from '../../repositories/products-repository'

let productsRepository: ProductsRepository
let sut: GetByIdProductUseCase

describe('Get Product By Id Use Case', () => {
  beforeEach(() => {
    productsRepository = new InMemoryProductsRepository()
    sut = new GetByIdProductUseCase(productsRepository)
  })

  it('should be able to get a product by its Id', async () => {
    const createdProduct = await productsRepository.create({
      title: 'Title-test',
      description: 'Description-test',
      amount: 1,
      price: 1.99
    })

    const { product } = await sut.execute({ id: createdProduct.id })
    
    expect(product!.id).toEqual(createdProduct.id)
  })
})