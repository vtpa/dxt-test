import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import { Prisma } from '@prisma/client'
import { makeOrderRegisterUseCase } from '../../../use-cases/factories/make-order-register-use-case'
import { makeProductUpdateUseCase } from '../../../use-cases/factories/make-product-update-use-case'

export const register = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  const { products } = JSON.parse(event.body!) as { products: string[] }

  try {
    const registerOrderUseCase = makeOrderRegisterUseCase()
    const updateProductUseCase = makeProductUpdateUseCase()

    const order = await registerOrderUseCase.execute({
      products
    })

    Promise.all(products.map(async productId => {
      await updateProductUseCase.execute({
        id: productId,
        amount: {
          decrement: 1
        }
      })
    }))

    return {
      statusCode: 200,
      body: JSON.stringify(order),
    }

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: error.message }),
    }
  }
}