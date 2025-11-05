import { Middleware } from "redux";
import { RootState } from "../store";

export const cartStorageMiddleware: Middleware<{}, RootState> =
  (store) => (next) => (action) => {
    const result = next(action);

    const actionsToPersist = [
      "ADD_TO_CART",
      "REMOVE_FROM_CART",
      "DECREASE_FROM_CART",
      "CLEAR_CART",
    ];
    if (
      typeof window !== "undefined" &&
      actionsToPersist.includes(action.type)
    ) {
      try {
        const state = store.getState();
        localStorage.setItem("cart", JSON.stringify(state.cart.cartItems));

        console.log(actionsToPersist.includes(action.type));
      } catch (err) {
        console.error("Error saving cart to localStorage:", err);
      }
    }
    return result;
  };
