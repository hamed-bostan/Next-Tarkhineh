import FoodCategoriesCard from "./FoodCategoriesCard";

export default function FoodCategoriesList({
  setSelectedCategory,
  selectedCategory,
  products,
}) {
  const FoodCategories = [
    "نمایش همه",
    ...new Set(products.map((item) => item.category)),
    "پرفروش‌ترین",
    "اقتصادی‌ترین",
  ];

  return (
    <div className="flex gap-2 flex-wrap md:gap-3 px-5 lg:px-10 2xl:px-28">
      {FoodCategories.map((item, index) => (
        <FoodCategoriesCard
          item={item}
          key={index}
          setSelectedCategory={setSelectedCategory}
          isSelected={selectedCategory === item}
        />
      ))}
    </div>
  );
}
