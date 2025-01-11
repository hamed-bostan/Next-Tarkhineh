import { foodInformation } from "@/lib/data";
import FoodCard from "./FoodCard";

export default function FoodList({ filter, title }) {
  const filteredFood = foodInformation.filter(
    (item) => item.category === filter
  );

  return (
    <>
      <h3 className="text-sm text-[#353535] font-bold self-end md:text-lg">
        {title}
      </h3>
      <div className="flex flex-col gap-y-3 mb-6">
        {filteredFood.map((foodItem) => {
          return <FoodCard foodItem={foodItem} key={foodItem.id} />;
        })}
      </div>
    </>
  );
}
