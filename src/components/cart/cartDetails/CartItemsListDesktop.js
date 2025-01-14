"use client";

import { useSelector } from "react-redux";
import CartItemsCardDesktop from "./CartItemsCardDesktop";
import { foodInformation } from "@/lib/data";

export default function CartItemsListDesktop() {
  const selectedItems = useSelector((state) => state.cart.selectedItems);

  console.log("Cart Items:", selectedItems); // Debugging the cart state

  // const filteredFood = foodInformation.filter(
  //   (item) => item.category === "ساندویچ‌ها"
  // );

  return (
    <div className="hidden md:flex flex-col gap-y-4 border border-[#CBCBCB] rounded-lg p-5 md:h-[25rem] lg:h-[32rem] overflow-y-scroll">
      {selectedItems.length > 0 ? (
        selectedItems.map((foodItem) => {
          return <CartItemsCardDesktop foodItem={foodItem} key={foodItem.id} />;
        })
      ) : (
        <p>no selected items in cart</p>
      )}
    </div>
  );
}
