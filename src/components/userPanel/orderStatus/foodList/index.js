import MyButton from "@/components/common/MyButton";
import FoodCard from "./FoodCard";
import { useSelector } from "react-redux";

export default function FoodList() {
  const selectedItems = useSelector((state) => state.cart.selectedItems);

  return (
    <>
      <div className="flex gap-x-2 mb-2">
        {selectedItems.map((item) => (
          <FoodCard item={item} key={item.id} />
        ))}
      </div>
      <ActionButtons />
    </>
  );
}

function ActionButtons() {
  return (
    <>
      <span className="text-[#717171] text-xs text-center block mb-4 md:hidden">
        مشاهده همه سفارشات
      </span>
      <MyButton
        label="لغو سفارش"
        variant="outline"
        buttonStyle="border-[#C30000] text-[#C30000] mx-auto"
      />
    </>
  );
}
