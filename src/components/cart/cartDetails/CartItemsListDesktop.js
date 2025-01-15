"use client";

import { useSelector } from "react-redux";
import CartItemsCardDesktop from "./CartItemsCardDesktop";
import EmptyCartMessage from "./EmptyCartMessage";

export default function CartItemsListDesktop() {
  const selectedItems = useSelector((state) => state.cart.selectedItems);

  return (
    <div className="hidden md:flex flex-col gap-y-4 border border-[#CBCBCB] rounded-lg p-5 md:h-[25rem] lg:h-[32rem] overflow-y-scroll">
      {selectedItems.length > 0 ? (
        selectedItems.map((foodItem) => {
          return <CartItemsCardDesktop foodItem={foodItem} key={foodItem.id} />;
        })
      ) : (
        <EmptyCartMessage />
      )}
    </div>
  );
}
