import { Middleware } from "redux";
import { RootState } from "../store";

export const orderStorageMiddleware: Middleware<{}, RootState> =
  (store) => (next) => (action) => {
    const result = next(action);

    const actionsToPersist = ["ADD_ORDER"];
    if (
      typeof window !== "undefined" &&
      actionsToPersist.includes(action.type)
    ) {
      try {
        const state = store.getState();
        localStorage.setItem("order", JSON.stringify(state.order.orders));

        console.log(actionsToPersist.includes(action.type));
      } catch (err) {
        console.error("Error saving cart to localStorage:", err);
      }
    }
    return result;
  };
