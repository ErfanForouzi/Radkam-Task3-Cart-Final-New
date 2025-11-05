"use client";
import { useAppSelector } from "@/redux/store";
import CartEmpty from "./cart-empty";
import CartItem from "./cart-item";
import CartSummary from "./cart-summary";
import { useEffect, useState } from "react";
import { LoadingDots } from "../loading";

const Cart: React.FC = () => {
  const [mounted,setMounted] = useState<boolean>(false);
  const cart = useAppSelector((state) => state.cart);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted)
    return (
      <div className="w-full flex items-center justify-center my-14">
        <LoadingDots width={200} height={30} color="var(--primary-color)" />
      </div>
    );

  if (cart.cartItems.length < 1) {
    return <CartEmpty />;
  }
  return (
    <section className="w-full text-gray-200 my-5 relative">
      <div className="w-[98%] lg:w-[93%] xl:w-[90%] my-14 lg:my-4 mx-auto flex flex-col-reverse lg:flex-row gap-2 relative">
        <div className="w-full lg:w-[75%] shadow-md lg:shadow-none rounded-lg">
          <div className="w-full lg:border lg:border-gray-600 my-2 rounded-lg p-4 pb-16 lg:pb-0">
            <div className="flex items-center gap-2 text-base font-bold text-gray-200 my-3">
              <span className="bg-red-600 py-1 px-4 rounded-sm">
                {cart.cartItems.length}
              </span>
              <span>Products In Basket</span>
            </div>

            <div className="flex flex-wrap">
              {cart &&
                cart.cartItems.map((cartItem) => (
                  <CartItem key={`cart-${cartItem.id}`} cartItem={cartItem} />
                ))}
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[25%] static lg:sticky top-4 h-full shadow-md lg:shadow-none rounded-lg">
          <CartSummary
            cartTotalQuantity={cart.cartTotalQuantity}
            cartTotalAmount={cart.cartTotalAmount}
          />
        </div>
      </div>
    </section>
  );
};
export default Cart;
