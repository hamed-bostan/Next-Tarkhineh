import { foodInformation } from "@/lib/data";
import FoodCard from "./FoodCard";

export default function FoodList() {
  return (
    <div className="flex flex-wrap gap-x-4 gap-y-5 md:gap-y-6">
      {foodInformation.map((item) => (
        <FoodCard item={item} key={item.id} />
      ))}
    </div>
  );
}
