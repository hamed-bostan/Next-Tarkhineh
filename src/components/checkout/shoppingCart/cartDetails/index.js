"use client";

import { useSelector } from "react-redux";

import ItemsMobile from "./itemsMobile";
import ItemsDesktop from "./itemsDesktop";
import EmptyCartMessage from "./EmptyCartMessage";
import { Separator } from "@/components/ui/separator";

export default function CartDetails() {
  const selectedItems = useSelector((state) => state.cart.selectedItems);

  return (
    <div>
      {selectedItems.length > 0 ? (
        <>
          <ItemsMobile selectedItems={selectedItems} />
          <ItemsDesktop selectedItems={selectedItems} />
          <Separator className="md:hidden" />
        </>
      ) : (
        <EmptyCartMessage />
      )}
    </div>
  );
}
