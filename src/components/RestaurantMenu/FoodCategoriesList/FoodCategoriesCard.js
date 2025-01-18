import { ArrowLeft } from "lucide-react";

export default function FoodCategoriesCard({
  item,
  setSelectedCategory,
  isSelected,
}) {
  return (
    <div
      onClick={() => setSelectedCategory(item)}
      className="flex items-center gap-x-1 bg-[#EDEDED] rounded-md px-2 h-6 md:rounded-xl md:h-8 cursor-pointer"
    >
      <span
        className={`text-xs md:text-sm ${
          isSelected ? "text-[#417F56]" : "text-[#353535]"
        }`}
      >
        {item}
      </span>
      <ArrowLeft
        className="w-3 h-3 md:w-4 md:h-4 flex self-center"
        color={`${isSelected ? "#417F56" : "#353535"}`}
      />
    </div>
  );
}
