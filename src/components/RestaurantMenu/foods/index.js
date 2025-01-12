import FoodList from "./FoodList";

export default function Foods() {
  return (
    <div className="px-5 py-6">
      <FoodList title="غذاهای ایرانی" filter="غذاهای ایرانی" />
      <FoodList title="غذاهای غیر ایرانی" filter="غذاهای غیر ایرانی" />
      <FoodList title="پیتزاها" filter="پیتزاها" />
      <FoodList title="ساندویچ‌ها" filter="ساندویچ‌ها" />
    </div>
  );
}
