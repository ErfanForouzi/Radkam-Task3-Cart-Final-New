import { OrderItem } from "@/app/_components/order/order.types";
import { Product } from "@/app/_components/products/products.types";
import { CartItem } from "../reducers/cart";

//Cart
export const ADD_TO_CART = "ADD_TO_CART" as const;
export const REMOVE_FROM_CART = "REMOVE_FROM_CART" as const;
export const CLEAR_CART = "CLEAR_CART" as const;
export const DECREASE_FROM_CART = "DECREASE_FROM_CART" as const;
export const LOAD_CART_FROM_STORAGE = "LOAD_CART_FROM_STORAGE" as const;

export interface AddToCartAction {
  type: typeof ADD_TO_CART;
  payload: Product;
}
export interface RemoveFromCartAction {
  type: typeof REMOVE_FROM_CART;
  payload: number;
}
export interface ClearCartAction {
  type: typeof CLEAR_CART;
}
export interface DecreaseFromCartAction {
  type: typeof DECREASE_FROM_CART;
  payload: number;
}
export interface LoadCartFromStorageAction {
  type: typeof LOAD_CART_FROM_STORAGE;
  payload: CartItem[];
}

export type CartActions =
  | AddToCartAction
  | RemoveFromCartAction
  | ClearCartAction
  | DecreaseFromCartAction
  | LoadCartFromStorageAction;

//Order
export const ADD_ORDER = "ADD_ORDER" as const;
export const LOAD_ORDER_FROM_STORAGE = "LOAD_ORDER_FROM_STORAGE" as const;
export interface AddOrderAction {
  type: typeof ADD_ORDER;
  payload: OrderItem;
}
export interface LoadOrderFromStorageAction {
  type: typeof LOAD_ORDER_FROM_STORAGE;
  payload: OrderItem[];
}
export type OrderActions = AddOrderAction | LoadOrderFromStorageAction;
