import FoodList from "./FoodList";

export default function Foods({ selectedCategory }) {
  const isAllCategories = selectedCategory === "نمایش همه";

  return (
    <>
      {isAllCategories ? (
        <>
          <FoodList title="غذاهای غیر ایرانی" filter="غذاهای غیر ایرانی" />
          <FoodList filter="غذاهای ایرانی" title="غذاهای ایرانی" />
          <FoodList title="پیتزاها" filter="پیتزاها" />
          <FoodList title="ساندویچ‌ها" filter="ساندویچ‌ها" />
        </>
      ) : (
        <FoodList filter={selectedCategory} title={selectedCategory} />
      )}
    </>
  );
}
