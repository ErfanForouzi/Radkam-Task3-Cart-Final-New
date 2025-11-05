import Link from "next/link";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";


export default function CartEmpty() {
  return (
    <section className="w-full  text-secondary-400  my-5 relative">

      <div className="w-[90%] my-14 lg:my-4 mx-auto flex flex-col-reverse lg:flex-row gap-2">
        <div className="w-full   shadow-md lg:shadow-none rounded-lg">
          <div className="w-full flex flex-col items-center justify-center text-center
        border border-gray-600 py-7 rounded-lg
        ">
            <MdOutlineRemoveShoppingCart size={50} />
            <h2 className="text-2xl my-5 text-gray-200">
              😒Your Cart Is Empty😒
            </h2>
            <p className="text-sm  text-gray-300  h-10 max-h-14">
              To See Products Go To Link Below:
            </p>
            <Link className="bg-blue-600 px-3 py-2 rounded-lg" href={'/products'}>
              Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}