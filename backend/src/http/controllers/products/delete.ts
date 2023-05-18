import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import { makeProductDeleteUseCase } from '../../../use-cases/factories/make-product-delete-use-case'

export const deleteFunction = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  try {
    
    const { id } = event.pathParameters! as { id: string }

    const deleteProductUseCase = makeProductDeleteUseCase()

    const product = await deleteProductUseCase.execute({ id })

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