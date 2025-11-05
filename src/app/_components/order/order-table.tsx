"use client";
import { orderTableHeads } from "@/constants/tableHeads";
import { useAppSelector } from "@/redux/store";
import Link from "next/link";
import { OrderTableProps } from "./order.types";

const OrderTable: React.FC<OrderTableProps> = ({orders}) => {

    const order = useAppSelector((state)=>state.order);
    const lastOrder  = orders.find((orderItem)=>orderItem.id === order.lastOrderId )

  return (
    <div className="w-full lg:w-3/4  mx-auto  min-w-[800px] ">
      <table className="border-collapse  overflow-hidden w-full">
        <thead>
          <tr>
            {orderTableHeads.map((item) => {
              return (
                <th key={item.id} className="whitespace- border-b border-gray-600 py-3 text-lg">
                  {item.label}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {[...orders].sort((a,b)=> new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).map((order, index) => {
            return (
              <tr key={order.id} className={`border-b border-gray-600 ${lastOrder?.id === order.id && 'bg-gray-600'}`}>
                <td className="text-center whitespace truncate">{order.id}</td>
                
                <td className="text-center whitespace-nowrap truncate py-3 text-base">
                  {order.createdAt}
                </td>
                <td className="text-center whitespace-nowrap truncate py-3 text-base">
                  <Link className="px-3 py-2 rounded-md border border-orange-500 text-orange-500" href={`/order/${order.id}`}>Detail</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default OrderTable;
