import { CartItem } from "@/redux/reducers/cart";

export interface OrderItem {
  id: number;
  orderItems: CartItem[];
  createdAt: string;
  orderTotalQuantity: number;
  orderTotalAmount: number;
}

export type OrderTableProps = {
  orders:OrderItem[]
}