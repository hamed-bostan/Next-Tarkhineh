"use client";

import Link from "next/link";
import { LogOut, Search, ShoppingCart, User } from "lucide-react";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
// import { getServerSession } from "next-auth";
// import { options } from "@/app/api/auth/[...nextauth]/options";
import { useSession } from "next-auth/react";

export default function ActionButton() {
  const pathname = usePathname();
  const itemsCounter = useSelector((state) => state.cart.itemsCounter);
  // const session = await getServerSession(options);
  const { data: session } = useSession(); // Client-side session retrieval

  return (
    <div className="flex items-center gap-x-1">
      <div className="bg-[#E5F2E9] p-2 box-content rounded-sm cursor-pointer">
        <Search color="#417F56" className="h-4 w-4" />
      </div>
      <div
        className={`p-2 box-content rounded-sm relative ${
          pathname === "/checkout" ? "bg-[#417F56]" : "bg-[#E5F2E9]"
        }`}
      >
        <Link href="/checkout">
          <ShoppingCart
            className={`h-4 w-4 ${
              pathname === "/checkout" ? "text-[#fff]" : "text-[#417F56]"
            }`}
          />
        </Link>
        {itemsCounter > 0 && (
          <span className="text-xs text-[#fff] bg-[#61AE7B] rounded-full absolute top-1 right-0 w-3 h-3 p-2 flex justify-center items-center">
            {itemsCounter}
          </span>
        )}
      </div>
      <Link href="/userPanel">
        <div className="bg-[#E5F2E9] p-2 box-content rounded-sm cursor-pointer">
          {session ? (
            <LogOut
              color="#C30000"
              className="w-4 h-4 md:w-5 md:h-5 cursor-pointer"
            />
          ) : (
            <User color="#417F56" className="h-4 w-4" />
          )}
        </div>
      </Link>
    </div>
  );
}
