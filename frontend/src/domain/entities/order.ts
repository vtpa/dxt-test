import { IProduct } from "./products";

export interface IOrder {
  id: string
  products: IProduct[]
}

export interface IOrderDTO {
  products: string[]
}