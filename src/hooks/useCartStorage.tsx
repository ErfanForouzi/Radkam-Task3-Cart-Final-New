"use client";

import { loadCartFromStorage } from "@/redux/actions/cart";
import { CartItem } from "@/redux/reducers/cart";
import { useAppDispatch } from "@/redux/store";
import { useEffect } from "react";

export const useCartStorage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      const cartStorage = localStorage.getItem("cart");

      if (cartStorage) {
        const parsed: CartItem[] = JSON.parse(cartStorage);

        dispatch(loadCartFromStorage(parsed));
      }
    } catch (err) {
      console.error("Error reading cart from localStorage:", err);
    }
  }, [dispatch]);
};
