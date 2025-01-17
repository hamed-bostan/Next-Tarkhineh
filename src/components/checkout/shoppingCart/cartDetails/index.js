"use client";

import { useSelector } from "react-redux";
import { Separator } from "@/components/ui/separator";
import Items from "./items";
import EmptyCartMessage from "../../EmptyCartMessage";

export default function CartDetails() {
  const selectedItems = useSelector((state) => state.cart.selectedItems);

  return (
    <>
      {selectedItems.length > 0 ? (
        <>
          <Items selectedItems={selectedItems} />
          <Separator className="md:hidden" />
        </>
      ) : (
        <EmptyCartMessage
          button={true}
          text="شما در حال حاضر هیچ سفارشی ثبت نکرده‌اید!"
        />
      )}
    </>
  );
}
