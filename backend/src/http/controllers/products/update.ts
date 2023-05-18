import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import { Prisma } from '@prisma/client'
import { makeProductUpdateUseCase } from '../../../use-cases/factories/make-product-update-use-case'

export const update = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  try {
    
    const { id } = event.pathParameters! as { id: string }
    const { title, description, price, amount } = JSON.parse(event.body!) as Prisma.ProductUpdateInput

    const updateProductsUseCase = makeProductUpdateUseCase()

    const product = await updateProductsUseCase.execute({ id, title, description, price, amount })

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