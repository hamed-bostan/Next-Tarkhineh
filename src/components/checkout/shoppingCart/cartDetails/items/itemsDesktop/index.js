"use client";

import ItemsCard from "./ItemsCard";

export default function ItemsDesktop({ selectedItems }) {
  return (
    <div className="hidden md:flex flex-col gap-y-4 border border-[#CBCBCB] rounded-lg p-5 md:h-[25rem] lg:h-[32rem] overflow-y-scroll">
      {selectedItems.map((foodItem) => (
        <ItemsCard foodItem={foodItem} key={foodItem.id} />
      ))}
    </div>
  );
}
