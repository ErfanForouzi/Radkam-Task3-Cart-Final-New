import CartHeader from "../cart/cart-header";
import TopNavigation from "./navigation-menu-item";

export const  Header = ()=>{
    return(
        <header className="bg-gray-800 flex items-center">
               <div className="w-full flex items-center justify-between px-4">
                <TopNavigation/>
                <div className="flex items-center gap-5">
                    <CartHeader />
                    <h1 className="lg:text-2xl text-gray-200">Ecommerce Project</h1>
                </div>
               </div>
        </header>
    )
}