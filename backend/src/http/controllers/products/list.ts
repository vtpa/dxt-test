import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import { makeProductListUseCase } from '../../../use-cases/factories/make-product-list-use-case'

export const list = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {

  try {
    const listProductsUseCase = makeProductListUseCase()

    const products = await listProductsUseCase.execute()

    return {
      statusCode: 200,
      body: JSON.stringify(products),
    }

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: error.message }),
    }
  }
}