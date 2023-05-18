import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import { makeProductGetByIdUseCase } from '../../../use-cases/factories/make-product-get-by-id-use-case'

export const getById = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  try {
    
    const { id } = event.pathParameters! as { id: string }

    const getByIdProductsUseCase = makeProductGetByIdUseCase()

    const product = await getByIdProductsUseCase.execute({ id })

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