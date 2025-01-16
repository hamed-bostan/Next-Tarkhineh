"use client";

import CartSummary from "../CartSummary";
import ItemsCard from "./ItemsCard";

export default function ItemsDesktop({ selectedItems }) {
  return (
    <div className="hidden md:grid md:grid-cols-[60fr_40fr] md:gap-x-4 lg:gap-x-6">
      <div className=" md:flex flex-col gap-y-4 border border-[#CBCBCB] rounded-lg p-5 md:h-[25rem] lg:h-[32rem] overflow-y-scroll">
        {selectedItems.map((foodItem) => (
          <ItemsCard foodItem={foodItem} key={foodItem.id} />
        ))}
      </div>
      <CartSummary />
    </div>
  );
}
