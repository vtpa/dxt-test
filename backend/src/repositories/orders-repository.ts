import { Order } from "@prisma/client";

export interface CreateOrderInterface {
  products: string[]
}

export interface OrdersRepository {
  create(data: CreateOrderInterface): Promise<Order>
}