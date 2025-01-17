"use client";

import { useSelector } from "react-redux";
import EmptyCartMessage from "./EmptyCartMessage";
import { Separator } from "@/components/ui/separator";
import Items from "./items";

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
        <EmptyCartMessage />
      )}
    </>
  );
}
