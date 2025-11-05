import { Product } from "@/app/_components/products/products.types";
import { CartActions } from "../actions/actions.types";
import {
  addToCartHelper,
  decreaseFromCartHelper,
  loadCartFromStorageHelper,
  removeFromCartHelper,
} from "./cart-helper";

export interface CartItem extends Product {
  quantity: number;
}
export interface CartState {
  cartItems: CartItem[];
  cartTotalQuantity: number;
  cartTotalAmount: number;
}
const initialState: CartState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

export function cart(state: CartState = initialState, action: CartActions) {
  switch (action.type) {
    case "LOAD_CART_FROM_STORAGE": {
      return loadCartFromStorageHelper(state, action);
    }
    case "ADD_TO_CART": {
      return addToCartHelper(state, action);
    }
    case "CLEAR_CART": {
      return {
        ...state,
        cartItems: [],
        cartTotalQuantity: 0,
        cartTotalAmount: 0,
      };
    }
    case "REMOVE_FROM_CART": {
      try {
        return removeFromCartHelper(state, action);
      } catch (error) {
        return state;
      }
    }
    case "DECREASE_FROM_CART": {
      try {
        return decreaseFromCartHelper(state, action);
      } catch (error) {
        return state;
      }
    }
    default:
      return state;
  }
}
