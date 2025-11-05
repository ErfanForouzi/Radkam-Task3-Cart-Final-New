"use client";
import { useState } from "react";
import { toast } from "react-toastify";
import { useAppDispatch } from "@/redux/store";
import { Product } from "@/app/_components/products/products.types";
import {
  addToCart,
  decreaseFromCart,
  removeFromCart,
} from "@/redux/actions/cart";

export const useCartAction = () => {
  const dispatch = useAppDispatch();
  const [loadingAddToCart, setLoadingAddToCart] = useState<boolean>(false);
  const [loadingRemoveFromCartCount, setLoadingRemoveFromCartCount] =
    useState<boolean>(false);

  const removeFromCartCount = async (id: number) => {
    if (loadingRemoveFromCartCount) return;
    setLoadingRemoveFromCartCount(true);
    await new Promise((resolve) => setTimeout(resolve, 600));
    dispatch(decreaseFromCart(id));
    setLoadingRemoveFromCartCount(false);
  };

  const addToCartHandler = async (product: Product) => {
    if (loadingAddToCart) return;
    setLoadingAddToCart(true);
    await new Promise((resolve) => setTimeout(resolve, 600));
    dispatch(addToCart(product));
    setLoadingAddToCart(false);
  };
  const addToCartHandlerWithoutLoading = async (product: Product) => {
    dispatch(addToCart(product));
    toast.success("produt added to cart successfully");
  };

  const removeCartHandler = (id: number) => {
    dispatch(removeFromCart(id));
    toast.error(`remove from cart`);
  };

  return {
    removeCartHandler,
    removeFromCartCount,
    addToCartHandler,
    addToCartHandlerWithoutLoading,
    loadingAddToCart,
    loadingRemoveFromCartCount,
  };
};
