"use client";
import { LoadingDots } from "@/app/_components/loading";
import { useOrderStorage } from "@/hooks/useOrderStorage";
import { useAppSelector } from "@/redux/store";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";
import OrderItemDetail from "./order-item-details";

export default function OrderDetail({ orderId }: { orderId: number }) {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useOrderStorage();
  const order = useAppSelector((state) => state.order);
  const orderItemDetails = order.orders.find(
    (item) => item.id === Number(orderId)
  );

  if (!mounted)
    return (
      <div className="w-full flex items-center justify-center my-14">
        <LoadingDots width={200} height={30} color="var(--primary-color)" />
      </div>
    );
  if (orderItemDetails?.id) {
    return (
      <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
        <div className="mx-auto max-w-5xl px-4 2xl:px-0">
          <div className="mx-auto max-w-5xl">
            <div className="gap-4 sm:flex sm:items-center sm:justify-between">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
                My Order
              </h2>
              <div className="flex items-center gap-2">
                <span className="w-full rounded-lg border border-red-700 px-3 py-2 text-center text-sm font-medium text-red-700 hover:bg-red-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-red-300 dark:border-red-500 dark:text-red-500 dark:hover:bg-red-600 dark:hover:text-white dark:focus:ring-red-900 lg:w-auto">
                  Total Price {orderItemDetails?.orderTotalAmount.toFixed(2)}
                </span>
                <span className="w-full rounded-lg border border-blue-600 px-3 py-2 text-center text-sm font-medium text-blue-600 hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-500 dark:hover:text-white dark:focus:ring-blue-800 lg:w-auto">
                  Total Quantity {orderItemDetails?.orderTotalQuantity}
                </span>
                <Link
                  className="text-green-500 border border-green-500 px-3 py-2 rounded-md text-sm"
                  href="/order"
                >
                  All My Orders
                </Link>
              </div>
            </div>

            <div className="mt-6 flow-root sm:mt-8">
              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                 {orderItemDetails?.orderItems.map((orderItemDetail) => ( 
                  <OrderItemDetail orderItemDetail={orderItemDetail}/>
                ))}
                
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } else {
    return notFound();
  }
}
