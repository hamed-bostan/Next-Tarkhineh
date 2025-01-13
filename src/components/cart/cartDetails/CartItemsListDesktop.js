import CartItemsCardDesktop from "./CartItemsCardDesktop";
import { foodInformation } from "@/lib/data";

export default function CartItemsListDesktop() {
  const filteredFood = foodInformation.filter(
    (item) => item.category === "ساندویچ‌ها"
  );
  return (
    <div className="hidden md:flex flex-col gap-y-4 border border-[#CBCBCB] rounded-lg p-5 md:h-[25rem] lg:h-[32rem] overflow-y-scroll">
      {filteredFood.map((foodItem) => {
        return <CartItemsCardDesktop foodItem={foodItem} key={foodItem.id} />;
      })}
    </div>
  );
}
