import { AddOrderAction, LoadOrderFromStorageAction } from "./actions.types";
import { OrderItem } from "@/app/_components/order/order.types";

export function addOrder(payload: OrderItem): AddOrderAction {
  return { type: "ADD_ORDER", payload };
}
export function loadOrderFromStorage(
  payload: OrderItem[]
): LoadOrderFromStorageAction {
  return { type: "LOAD_ORDER_FROM_STORAGE", payload };
}
