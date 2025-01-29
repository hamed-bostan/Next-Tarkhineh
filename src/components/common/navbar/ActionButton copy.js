"use client";
import { Button } from "@/components/ui/button";
import { userMenuItems } from "@/components/userPanel/Sidebar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";
import { LogOut, Search, ShoppingCart, User } from "lucide-react";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
// import { getServerSession } from "next-auth";
// import { options } from "@/app/api/auth/[...nextauth]/options";
import { useSession } from "next-auth/react";
import { Separator } from "@/components/ui/separator";

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
      <PopoverDemo />
    </div>
  );
}

function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-fit p-2">
        <div className="p-0">
          {userMenuItems.map((item, index) => (
            <div key={index}>
              <Link
                href="/userPanel"
                className="flex items-center text-[#353535] text-xs gap-x-1 py-2 cursor-pointer w-fit"
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </Link>
              {index < userMenuItems.length - 1 && (
                <Separator className="bg-[#EDEDED]" />
              )}
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
