"use client";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { CartSummaryProps } from "./cart.types";
import { addOrder } from "@/redux/actions/order";
import { OrderItem } from "../order/order.types";
import { clearCart } from "@/redux/actions/cart";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { Button } from "../button";

const CartSummary: React.FC<CartSummaryProps> = ({
  cartTotalAmount,
  cartTotalQuantity,
}: CartSummaryProps) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart);

  const completeShopping = (orderItem: OrderItem) => {
    dispatch(addOrder(orderItem));
    toast.success("Your order has been successfully done");
    router.replace(`/order/${orderItem.id}`);
    setTimeout(() => {
      dispatch(clearCart());
    }, 400);
  };

  return (
    <div className="w-full lg:border border-gray-600 rounded-lg  text-sm">
      <div className="px-4 pt-3">
        <div className="flex justify-between w-full text-xl my-6 text-gray-300">
          <span>Products Count</span>
          <span className="flex items-center gap-1"> {cartTotalQuantity}</span>
        </div>
        <div className="flex justify-between w-full text-xl my-6 text-secondary-800">
          <span>Total Amount:</span>
          <span className="flex items-center gap-1 text-green-500">
            {" "}
            ${cartTotalAmount.toFixed(2)}
          </span>
        </div>
      </div>
      <Button
        onClick={() =>
          completeShopping({
            id: Date.now(),
            createdAt: new Date().toISOString(),
            orderItems: cart.cartItems,
            orderTotalAmount: cart.cartTotalAmount,
            orderTotalQuantity: cart.cartTotalQuantity,
          })
        }
        className="w-11/12 lg:flex items-center justify-center bg-blue-500 py-3 
      rounded-md text-white mx-auto text-sm mb-2 cursor-pointer"
      >
        Complete Your Shopping
      </Button>
    </div>
  );
};
export default CartSummary;
