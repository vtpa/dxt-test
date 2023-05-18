import { expect, describe, it, beforeEach } from 'vitest'

import { InMemoryProductsRepository } from '../../repositories/in-memory/in-memory-products-repository'
import { RegisterProductUseCase } from './register'
import { ProductsRepository } from '../../repositories/products-repository'

let productsRepository: ProductsRepository
let sut: RegisterProductUseCase

describe('Create Product Use Case', () => {
  beforeEach(() => {
    productsRepository = new InMemoryProductsRepository()
    sut = new RegisterProductUseCase(productsRepository)
  })

  it('should be able to create a new product', async () => {
    const { product } = await sut.execute({
      title: 'Title-test',
      description: 'Description-test',
      amount: 1,
      price: 1.99
    })

    expect(product.id).toEqual(expect.any(String))
  })
})