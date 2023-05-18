import { Prisma, Product } from '@prisma/client'

export interface ProductsRepository {
  create(data: Prisma.ProductCreateInput): Promise<Product>
  findMany(): Promise<Product[]>
  findById(id: string): Promise<Product | null>
  update(id: string, data: Prisma.ProductUpdateInput): Promise<Product>
  delete(id: string): Promise<void>
}