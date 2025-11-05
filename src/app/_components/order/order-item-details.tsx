import { CartItem } from "@/redux/reducers/cart";
import Image from "next/image";

const OrderItemDetail = ({orderItemDetail}:{orderItemDetail:CartItem}) => {
  return (
    <div
      key={orderItemDetail.id}
      className="flex flex-wrap items-center gap-y-4 py-6"
    >
      <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
        <dt className="text-base font-medium text-gray-500 dark:text-gray-400">
          OrderItem ID:
        </dt>
        <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">
          <a href="#" className="hover:underline">
            {" "}
            {orderItemDetail.id}
          </a>
        </dd>
      </dl>

      <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
        <dt className="text-base font-medium text-gray-500 dark:text-gray-400">
          Thumbnail:
        </dt>
        <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">
          <Image
            width={80}
            height={80}
            alt=""
            className="w-20 h-20"
            src={orderItemDetail.thumbnail}
          />
        </dd>
      </dl>
      <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
        <dt className="text-base font-medium text-gray-500 dark:text-gray-400">
          Title:
        </dt>
        <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">
          {orderItemDetail.title}
        </dd>
      </dl>

      <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
        <dt className="text-base font-medium text-gray-500 dark:text-gray-400">
          Price:
        </dt>
        <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">
          ${orderItemDetail.price}
        </dd>
      </dl>

      <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
        <dt className="text-base font-medium text-gray-500 dark:text-gray-400">
          Quantity:
        </dt>
        <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">
          {orderItemDetail.quantity}
        </dd>
      </dl>
    </div>
  );
};
export default OrderItemDetail