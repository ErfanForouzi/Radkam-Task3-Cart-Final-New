"use client";
import Link from "next/link";
import { useAppSelector } from "@/redux/store";
import { FaCartPlus } from "react-icons/fa";
import { useEffect, useState } from "react";


export default function CartHeader() {
  const cart = useAppSelector((state) => state.cart);
  const [mounted,setMounted] = useState<boolean>(false);

  useEffect(()=>{
     setMounted(true)
  },[])
  return (
    <Link href={'/cart'} className="relative">
        <FaCartPlus size={25}/>
      {mounted && <span
        className="absolute right-[-5px] bg-red-500 text-white  text-xs py-px px-1 rounded-sm "
      >
        {cart?.cartItems?.length}
      </span>}
    </Link>
  )
}