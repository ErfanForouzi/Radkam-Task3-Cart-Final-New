import { CartItem as CartItemProps } from "@/redux/reducers/cart";
import Image from "next/image";
import Link from "next/link";
import CartActions from "./cart-actions";

const CartItem = ({ cartItem }: { cartItem: CartItemProps }) => {

  return (
    <div className="flex justify-start py-5 px-4">
      <div>
        <Link href={`/products/${cartItem.id}`}>
          <Image
            width={112}
            height={112}
            alt=""
            className="w-28 h-28 mb-4"
            src={cartItem.thumbnail}
          />
        </Link>

        <div className="w-auto h-auto flex items-center justify-around border border-slate-300 rounded-lg p-2 gap-4">
         <CartActions item={cartItem}/>
        </div>
      </div>
      <div className="px-3">
        <h5 className="text-2xl font-bold text-blue-300">{cartItem.title}</h5>
        <div className="mt-7 flex flex-col gap-3">
          <div className="flex items-center gap-2 text-xl">
            <div>
              <span>Price:</span>
              <span className="text-green-600 font-bold">${cartItem.price}</span>
            </div>
            <div className="flex items-center gap-1 text-xl">
              <span>Quantity:</span>
              <span className="text-green-600 font-bold">{cartItem.quantity}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartItem;
