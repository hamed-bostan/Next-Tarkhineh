"use client";

import { useSelector } from "react-redux";

import { Separator } from "@/components/ui/separator";
import CartSummary from "./CartSummary";
import ItemsMobile from "./itemsMobile";
import ItemsDesktop from "./itemsDesktop";

export default function CartDetails() {
  const selectedItems = useSelector((state) => state.cart.selectedItems);

  return (
    <div className="border border-[#CBCBCB] rounded-lg p-5 md:border-none md:p-0">
      <ItemsMobile selectedItems={selectedItems} />
      <div className="md:grid md:grid-cols-[60fr_40fr] md:gap-x-4 lg:gap-x-6">
        <ItemsDesktop selectedItems={selectedItems} />
        <Separator className="md:hidden" />
        <CartSummary />
      </div>
    </div>
  );
}
