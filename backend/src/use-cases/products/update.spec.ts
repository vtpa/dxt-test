import { expect, describe, it, beforeEach } from 'vitest'

import { InMemoryProductsRepository } from '../../repositories/in-memory/in-memory-products-repository'
import { UpdateProductUseCase } from './update'
import { ProductsRepository } from '../../repositories/products-repository'

let productsRepository: ProductsRepository
let sut: UpdateProductUseCase

describe('Update Product Use Case', () => {
  beforeEach(() => {
    productsRepository = new InMemoryProductsRepository()
    sut = new UpdateProductUseCase(productsRepository)
  })

  it('should be able to update a product', async () => {
    const createdProduct = await productsRepository.create({
      title: 'Title-test',
      description: 'Description-test',
      amount: 1,
      price: 1.99
    })

    const NEW_TITLE = 'new-title-test'

    const { product } = await sut.execute({ id: createdProduct.id, title: NEW_TITLE  })
    
    expect(product.id).toEqual(createdProduct.id)
    expect(product.title).toEqual(NEW_TITLE)
  })
})