"use client";
import { Product } from "@/app/_components/products/products.types";
import { useAppSelector } from "@/redux/store";

const useProductInCart = (product: Product) => {
  const cart = useAppSelector((state) => state.cart);
  const isProductAlreadyInCart = cart.cartItems.some(
    (cartItem) => cartItem.id === product.id
  );

  return isProductAlreadyInCart;
};
export default useProductInCart;
