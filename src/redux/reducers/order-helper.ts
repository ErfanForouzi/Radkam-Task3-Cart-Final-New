import {
  AddOrderAction,
  LoadOrderFromStorageAction,
} from "../actions/actions.types";
import { OrderState } from "./order";

export const addOrderHelper = (
  state: OrderState,
  action: AddOrderAction
): OrderState => {
  try {
    return {
      ...state,
      orders: [...state.orders, { ...action.payload }],
      lastOrderId: action.payload.id,
    };
  } catch (error) {
    return state;
  }
};

export const loadOrderFromStorageHelper = (
  state: OrderState,
  action: LoadOrderFromStorageAction
): OrderState => {
  try {
    const orderItems = action.payload || [];
    return { ...state, orders: orderItems };
  } catch (error) {
    return state;
  }
};
