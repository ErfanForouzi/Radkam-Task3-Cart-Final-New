import {
  AddToCartAction,
  DecreaseFromCartAction,
  LoadCartFromStorageAction,
  RemoveFromCartAction,
} from "../actions/actions.types";
import { CartItem, CartState } from "./cart";

const calculateTotals = (cartItems: CartItem[]) => {
  const cartTotalQuantity = cartItems.reduce(
    (acc, cartItem) => acc + cartItem.quantity,
    0
  );
  const cartTotalAmount = cartItems.reduce(
    (sumPrice, cartItem) => sumPrice + cartItem.quantity * cartItem.price,
    0
  );
  return { cartTotalQuantity, cartTotalAmount };
};

export const addToCartHelper = (
  state: CartState,
  action: AddToCartAction
): CartState => {
  try {
    const isExistIndex = state.cartItems.findIndex(
      (item) => item.id === action.payload.id
    );
    let newCartItems: CartItem[] = [];

    if (isExistIndex >= 0) {
      newCartItems = state.cartItems.map((cartItem) =>
        cartItem.id === action.payload.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    } else {
      newCartItems = [...state.cartItems, { ...action.payload, quantity: 1 }];
    }
    const { cartTotalAmount, cartTotalQuantity } =
      calculateTotals(newCartItems);
    // localStorage.setItem("cart", JSON.stringify(newCartItems));

    return {
      ...state,
      cartItems: newCartItems,
      cartTotalAmount,
      cartTotalQuantity,
    };
  } catch (error) {
    return state;
  }
};

export const removeFromCartHelper = (
  state: CartState,
  action: RemoveFromCartAction
): CartState => {
  try {
    const newCartItems = state.cartItems.filter(
      (cartItem) => cartItem.id !== action.payload
    );
    const { cartTotalAmount, cartTotalQuantity } =
      calculateTotals(newCartItems);
    // localStorage.setItem("cart", JSON.stringify(newCartItems));

    return {
      ...state,
      cartItems: newCartItems,
      cartTotalAmount,
      cartTotalQuantity,
    };
  } catch (error) {
    return state;
  }
};
export const decreaseFromCartHelper = (
  state: CartState,
  action: DecreaseFromCartAction
): CartState => {
  try {
    const newCartItems = state.cartItems
      .map((cartItem) =>
        cartItem.id === action.payload
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      )
      .filter((cartItem) => cartItem?.quantity > 0);

    const { cartTotalAmount, cartTotalQuantity } =
      calculateTotals(newCartItems);

    // localStorage.setItem("cart", JSON.stringify(newCartItems));

    return {
      ...state,
      cartItems: newCartItems,
      cartTotalAmount,
      cartTotalQuantity,
    };
  } catch (error) {
    return state;
  }
};

export const loadCartFromStorageHelper = (
  state: CartState,
  action: LoadCartFromStorageAction
): CartState => {
  try {
    const cartItems = action.payload || [];
    const { cartTotalAmount, cartTotalQuantity } = calculateTotals(
      state.cartItems
    );
    return { ...state, cartItems, cartTotalAmount, cartTotalQuantity };
  } catch (error) {
    return state;
  }
};
