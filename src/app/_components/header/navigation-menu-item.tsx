"use client";
import Link from "next/link"
import { usePathname } from "next/navigation";

const menuItems:NavigationMenuItem[] = [
    {
        title:"Home",
        href:"/"
    },
    {
        title:"Products",
        href:"/products"
    },
    {
        title:"Orders",
        href:"/order"
    }
]
export default function TopNavigation(){
    const pathname  = usePathname();

    return(
        <ul className="flex items-center gap-x-8 ">
           {menuItems.map((menuItem)=>{
             const isActive = pathname === menuItem.href;
                return (
                    <li key={`navigation-${menuItem.href}`}>
                        <Link 
                        className={`px-3 py-2 ${isActive && 'bg-blue-800 px-2 py-3 rounded-md'}`} 
                        href={menuItem.href}>
                            {menuItem.title}
                        </Link>
                    </li>
                )
        })}  
        </ul>
    )
}