import { Product } from "@/app/_components/products/products.types";
import { CartItem } from "../reducers/cart";
import {
  AddToCartAction,
  ClearCartAction,
  DecreaseFromCartAction,
  LoadCartFromStorageAction,
  RemoveFromCartAction,
} from "./actions.types";

export function loadCartFromStorage(
  payload: CartItem[]
): LoadCartFromStorageAction {
  return { type: "LOAD_CART_FROM_STORAGE", payload };
}
export function addToCart(payload: Product): AddToCartAction {
  return { type: "ADD_TO_CART", payload };
}
export function clearCart(): ClearCartAction {
  return { type: "CLEAR_CART" };
}
export function removeFromCart(payload: number): RemoveFromCartAction {
  return { type: "REMOVE_FROM_CART", payload };
}
export function decreaseFromCart(payload: number): DecreaseFromCartAction {
  return { type: "DECREASE_FROM_CART", payload };
}
