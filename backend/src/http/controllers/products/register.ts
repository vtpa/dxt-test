import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import { makeProductRegisterUseCase } from '../../../use-cases/factories/make-product-register-use-case'
import { Prisma } from '@prisma/client'

export const register = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  const { title, description, price, amount } = JSON.parse(event.body!) as Prisma.ProductCreateInput

  try {
    const registerProductUseCase = makeProductRegisterUseCase()

    const formattedPrice = parseInt(String(price * 100))

    const product = await registerProductUseCase.execute({
      title,
      description,
      price: formattedPrice,
      amount
    })

    return {
      statusCode: 200,
      body: JSON.stringify(product),
    }

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: error.message }),
    }
  }
}