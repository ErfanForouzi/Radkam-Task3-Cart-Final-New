"use client";

import { useAppSelector } from "@/redux/store";
import OrderTable from "./order-table";
import { useOrderStorage } from "@/hooks/useOrderStorage";
import { useEffect, useState } from "react";
import { LoadingDots } from "../loading";

export default function Order() {
  const [mounted,setMounted] = useState<boolean>(false);

  useEffect(()=>{
    setMounted(true)
  },[])

  useOrderStorage()
  const orders = useAppSelector((state) => state.order.orders);
  
  if (!mounted)
    return (
      <div className="w-full flex items-center justify-center my-14">
        <LoadingDots width={200} height={30} color="var(--primary-color)" />
      </div>
    );
  if (orders.length) {
    return (
      <div>
        <OrderTable orders={orders} />
      </div>
    );
  } else {
    return (
      <div className=" text-2xl text-center pt-10 text-gray-300">
        😒No Order Found😒
      </div>
    );
  }
}
