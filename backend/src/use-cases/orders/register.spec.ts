import { expect, describe, it, beforeEach } from 'vitest'

import { InMemoryOrdersRepository } from '../../repositories/in-memory/in-memory-orders-repository'
import { InMemoryProductsRepository } from '../../repositories/in-memory/in-memory-products-repository'
import { OrdersRepository } from '../../repositories/orders-repository'
import { RegisterOrderUseCase } from './register'
import { ProductsRepository } from '../../repositories/products-repository'

let ordersRepository: OrdersRepository
let productsRepository: ProductsRepository
let sut: RegisterOrderUseCase

describe('Create Order Use Case', () => {
  beforeEach(() => {
    ordersRepository = new InMemoryOrdersRepository()
    productsRepository = new InMemoryProductsRepository()
    sut = new RegisterOrderUseCase(ordersRepository)
  })

  it('should be able to create a new order', async () => {
    const product = await productsRepository.create({
      title: 'Title-test',
      description: 'Description-test',
      amount: 1,
      price: 1.99
    })

    const order = await ordersRepository.create({
      products: [product.id]
    })

    expect(order.id).toEqual(expect.any(String))
  })
})