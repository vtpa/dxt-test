import { Prisma, Product } from "@prisma/client";
import { uuid } from 'uuidv4';
import { ProductsRepository } from "../products-repository";

export class InMemoryProductsRepository implements ProductsRepository {
  public items: Product[] = []
  
  async findById(id: string): Promise<Product | null> {
    return this.items.find(item => item.id === id) || null
  }
  
  async findMany(): Promise<Product[]> {
    return this.items;
  }
  
  async create(data: Prisma.ProductCreateInput): Promise<Product> {
    const product = {
      id: uuid(),
      title: data.title,
      description: data.description,
      price: data.price,
      amount: data.amount,
      orderIDs: []
    }
    
    this.items.push(product)
    
    return product
  }

  async update(id: string, data: Partial<Prisma.ProductCreateInput>): Promise<Product> {
    const productIndex = this.items.findIndex(item => item.id === id)
    this.items[productIndex] = { ...this.items[productIndex], ...data }
    return this.items[productIndex]
  }

  async delete(id: string): Promise<void> {
    const productIndex = this.items.findIndex(item => item.id === id)
    this.items.slice(productIndex, 1)
  }
}
