import { OrderActions } from "../actions/actions.types";
import { OrderItem } from "@/app/_components/order/order.types";
import { addOrderHelper, loadOrderFromStorageHelper } from "./order-helper";

export interface OrderState {
  orders: OrderItem[];
  lastOrderId: number | null;
}

const initialState: OrderState = {
  orders: [],
  lastOrderId: null,
};

export function order(state: OrderState = initialState, action: OrderActions) {
  switch (action.type) {
    case "LOAD_ORDER_FROM_STORAGE": {
      return loadOrderFromStorageHelper(state, action);
    }
    case "ADD_ORDER": {
      return addOrderHelper(state, action);
    }
    default:
      return state;
  }
}
