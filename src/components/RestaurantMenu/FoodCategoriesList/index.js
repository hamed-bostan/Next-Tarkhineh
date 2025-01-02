import { foodInformation } from "@/lib/data";
import FoodCategoriesCard from "./FoodCategoriesCard";

export default function FoodCategoriesList() {
  const FoodCategories = [
    "نمایش همه",
    ...new Set(foodInformation.map((item) => item.category)),
    "پرفروش‌ترین",
    "اقتصادی‌ترین",
  ];

  return (
    <div className="flex gap-2 flex-wrap pr-5">
      {FoodCategories.map((item, index) => (
        <FoodCategoriesCard item={item} key={index} />
      ))}
    </div>
  );
}
