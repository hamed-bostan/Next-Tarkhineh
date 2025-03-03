import MyButton from "@/components/common/MyButton";
import FoodCard from "./FoodCard";
import { useSelector } from "react-redux";

export default function FoodList() {
  const selectedItems = useSelector((state) => state.cart.selectedItems);

  return (
    <>
      <div className="grid grid-cols-3 gap-2 mb-2 md:mb-4 lg:grid-cols-4 2xl:grid-cols-6">
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
      <span className="text-[#717171] text-xs text-center block mb-4 cursor-pointer md:hidden">
        مشاهده همه سفارشات
      </span>
      <MyButton
        label="لغو سفارش"
        variant="outline"
        buttonStyle="border-[#C30000] text-[#C30000] mx-auto hover:bg-[#FFF2F2] hover:text-[#C30000]"
      />
    </>
  );
}
