import { foodInformation } from "@/lib/dataOld";
import FoodCategoriesCard from "./FoodCategoriesCard";

export default function FoodCategoriesList({
  selectedCategory,
  setSelectedCategory,
}) {
  const FoodCategories = [
    "نمایش همه",
    ...new Set(foodInformation.map((item) => item.category)),
    "پرفروش‌ترین",
    "اقتصادی‌ترین",
  ];

  return (
    <div className="flex gap-2 flex-wrap pr-5 md:gap-3">
      {FoodCategories.map((item, index) => (
        <FoodCategoriesCard
          item={item}
          key={index}
          setSelectedCategory={setSelectedCategory}
        />
      ))}
    </div>
  );
}
