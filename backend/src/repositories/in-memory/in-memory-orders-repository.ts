import { Order } from "@prisma/client";
import { CreateOrderInterface, OrdersRepository } from "../orders-repository";
import { uuid } from 'uuidv4';

export class InMemoryOrdersRepository implements OrdersRepository {
  public items : Order[] = []

  async create(data: CreateOrderInterface): Promise<Order> {
    const order = { id: uuid() , productIDs: data.products }
    this.items.push(order)

    return order
  }
}