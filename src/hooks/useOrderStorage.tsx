"use client";

import { OrderItem } from "@/app/_components/order/order.types";
import { loadOrderFromStorage } from "@/redux/actions/order";
import { useAppDispatch } from "@/redux/store";
import { useEffect } from "react";

export const useOrderStorage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      const orderStorage = localStorage.getItem("order");

      if (orderStorage) {
        const parsed: OrderItem[] = JSON.parse(orderStorage);

        dispatch(loadOrderFromStorage(parsed));
      }
    } catch (err) {
      console.error("Error reading cart from localStorage:", err);
    }
  }, [dispatch]);
};
