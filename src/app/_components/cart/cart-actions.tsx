"use client";
import { useCartAction } from "@/hooks/useCartAction";
import { HiMinus, HiOutlineTrash, HiPlus } from "react-icons/hi";
import { Button } from "../button";
import { LoadingDots } from "../loading";
import { Product } from "../products/products.types";

const CartActions = ({ item }:{item:Product}) => {
    const { addToCartHandler, removeCartHandler, removeFromCartCount, loadingAddToCart, loadingRemoveFromCartCount } = useCartAction()
    return (
        <>
            <Button
                onClick={() =>
                    addToCartHandler(item)
                }
                className="text-white rounded  max-w-10 w-10 flex items-center justify-center"
            >
                {loadingAddToCart ? (
                    <LoadingDots width={40} height={20} color="var(--primary-color)" />
                ) : (
                    <HiPlus className="w-4 h-4 cursor-pointer" />
                )}
            </Button>{" "}
            <Button onClick={() => removeCartHandler(item.id)}>
                <HiOutlineTrash
                    className=" text-rose-500 w-6 h-6 cursor-pointer"
                />
            </Button>
            <Button onClick={() => removeFromCartCount(item.id)} className="text-white rounded   max-w-10 w-10 flex items-center justify-center">
                {loadingRemoveFromCartCount ? (
                    <LoadingDots width={40} height={20} color="var(--primary-color)" />
                ) : (
                    <HiMinus className="w-4 h-4 cursor-pointer" />
                )}
            </Button>
        </>
    )
}
export default CartActions