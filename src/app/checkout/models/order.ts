import { CartItem } from './cart';

export type Order = {
  id?: number
  name: string,
  email: string,
  address: string,
  card: string,
  items: CartItem[],
  total: number
}

export type OrderRegistry = {
  [id: string]: Order
}
