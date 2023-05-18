import { Order } from "@prisma/client";
import { CreateOrderInterface, OrdersRepository } from "../orders-repository";
import { prismaClientDatabase } from "../../database";

export class PrismaOrdersRepository implements OrdersRepository {
  async create(data: CreateOrderInterface): Promise<Order> {
    const order = await prismaClientDatabase.order.create({ 
      data: {
        productIDs: data.products as string[]
      } 
    })
    return order
  }
}