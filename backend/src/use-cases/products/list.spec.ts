import { expect, describe, it, beforeEach } from 'vitest'

import { InMemoryProductsRepository } from '../../repositories/in-memory/in-memory-products-repository'
import { ListProductsUseCase } from './list'
import { ProductsRepository } from '../../repositories/products-repository'

let productsRepository: ProductsRepository
let sut: ListProductsUseCase

describe('List Products Use Case', () => {
  beforeEach(() => {
    productsRepository = new InMemoryProductsRepository()
    sut = new ListProductsUseCase(productsRepository)
  })

  it('should be able to list orders', async () => {
    await productsRepository.create({
      title: 'Title-test',
      description: 'Description-test',
      amount: 1,
      price: 1.99
    })
    await productsRepository.create({
      title: 'Title-test2',
      description: 'Description-test2',
      amount: 2,
      price: 2.99
    })

    const { products } = await sut.execute()

    expect(products).toHaveLength(2)
  })
})