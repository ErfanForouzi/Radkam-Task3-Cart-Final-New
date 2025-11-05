"use client";
import { useCartAction } from "@/hooks/useCartAction";
import useProductInCart from "@/hooks/useProductInCart";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Button } from "../button";
import CartActions from "../cart/cart-actions";
import { Product } from "./products.types";

const ProductDetails = ({ product }: { product: Product }) => {
  const [mounted,setMounted] = useState<boolean>(false);
  const { addToCartHandlerWithoutLoading } = useCartAction();
  const isProductAlreadyInCart = useProductInCart(product);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <Link href={`/products/${product.id}`}>
        <Image
          width={200}
          height={200}
          alt=""
          src={product.thumbnail}
          className="rounded-t-lg w-50 h-50 mx-auto"
        />
      </Link>

      <div className="p-5">
        <h5 className="mb-4 text-base lg:text-2xl font-bold tracking-tight text-gray-900 dark:text-white min-h-3 h-14">
          {product.title}
        </h5>
        <span className="w-20 h-10 rounded-lg flex items-center justify-center px-3 py-2 bg-red-600 my-2">
          ${product.price}
        </span>
        <p className="mb-3 text-sm lg:text-base font-normal text-gray-700 dark:text-gray-400">
          {product.description.slice(0, 60)}...
        </p>
        {mounted ? (
          <>
            {isProductAlreadyInCart ? (
              <div className="inline-flex cursor-pointer items-center px-3 py-2 gap-2 text-sm font-medium text-center border border-slate-300 rounded-lg ">
                <CartActions item={product} />
              </div>
            ) : (
              <Button
                onClick={() => addToCartHandlerWithoutLoading(product)}
                className="flex cursor-pointer items-center p-3 gap-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800"
              >
                Add To Cart
                <FaArrowRight />
              </Button>
            )}
          </>
        ) : (
          <div className="w-1/2 h-6 animate-pulse cursor-pointer bg-gray-700 items-center px-3 py-4 gap-2 rounded-lg "></div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
