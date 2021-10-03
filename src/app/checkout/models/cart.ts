import { Product } from '../../catalog/models/product';

export type CartItem = {
  product: Product,
  amount: number
}

export type Cart = {
  items: {
    [id: string]: CartItem
  },
  total: number
}
