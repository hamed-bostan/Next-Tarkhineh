"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";
import { ArrowDown, Search, ShoppingCart, User } from "lucide-react";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { Separator } from "@/components/ui/separator";
import { userMenuItems } from "../UserMenuItems";
import { useSession } from "next-auth/react";
import { useState } from "react";

export default function ActionButton() {
  const pathname = usePathname();
  const itemsCounter = useSelector((state) => state.cart.itemsCounter);

  return (
    <div className="flex items-center gap-x-1">
      <div className="bg-[#E5F2E9] p-2 box-content rounded-sm cursor-pointer">
        <Search color="#417F56" className="h-4 w-4" />
      </div>
      <div className="relative">
        <Link href="/checkout">
          <div
            className={`p-2 box-content rounded-sm  ${
              pathname === "/checkout"
                ? "bg-[#417F56] text-[#fff]"
                : "bg-[#E5F2E9] text-[#417F56]"
            }`}
          >
            <ShoppingCart className="h-4 w-4" />
          </div>
        </Link>
        {itemsCounter > 0 && (
          <span className="text-xs text-[#fff] bg-[#61AE7B] rounded-full absolute top-1 right-0 w-3 h-3 p-2 flex justify-center items-center">
            {itemsCounter}
          </span>
        )}
      </div>
      <UserMenuPopover />
    </div>
  );
}

function UserMenuPopover() {
  const { data: session } = useSession(); // Client-side session retrieval
  const pathname = usePathname();
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  return (
    <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
      <PopoverTrigger asChild>
        {session ? (
          <div
            className={`p-2 box-content rounded-sm cursor-pointer flex ${
              pathname === "/userPanel"
                ? "bg-[#417F56] text-[#fff]"
                : "bg-[#E5F2E9] text-[#417F56]"
            }`}
          >
            <User className="h-4 w-4" />
            <ArrowDown className="h-4 w-4" />
          </div>
        ) : (
          <Link
            href="/api/auth/signin"
            className="bg-[#E5F2E9] p-2 box-content rounded-sm cursor-pointer flex"
          >
            <User color="#417F56" className="h-4 w-4" />
          </Link>
        )}
      </PopoverTrigger>
      {session && (
        <PopoverContent className="w-fit p-2">
          <div className="p-0">
            {userMenuItems.map((item, index) => (
              <div key={index}>
                <Link
                  onClick={() => setIsPopoverOpen(false)}
                  href={item.href}
                  className="flex items-center text-xs gap-x-1 py-2 cursor-pointer w-fit"
                >
                  <item.icon className="w-4 h-4 text-[#353535]" />
                  <span className="text-[#353535]">{item.label}</span>
                </Link>
                {index < userMenuItems.length - 1 && (
                  <Separator className="bg-[#EDEDED]" />
                )}
              </div>
            ))}
          </div>
        </PopoverContent>
      )}
    </Popover>
  );
}
