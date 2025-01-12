import { foodInformation } from "@/lib/data";
import FoodCard from "./FoodCard";

export default function FoodList({ filter, title }) {
  const filteredFood = foodInformation.filter(
    (item) => item.category === filter
  );

  return (
    <>
      {title && (
        <h3 className="text-sm text-[#353535] font-bold self-end md:text-lg mb-3 md:mb-5">
          {title}
        </h3>
      )}
      <div className="grid grid-cols-1 gap-y-3 mb-6 md:grid-cols-2 md:gap-5">
        {filteredFood.map((foodItem) => {
          return <FoodCard foodItem={foodItem} key={foodItem.id} />;
        })}
      </div>
    </>
  );
}
