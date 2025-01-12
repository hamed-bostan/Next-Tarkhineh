import CheckoutButton from "../CheckoutButton";
import FoodList from "./FoodList";

export default function Foods() {
  return (
    <div className="px-5 py-6">
      <div className="flex justify-between mb-3 md:mb-5">
        <h1 className="text-sm text-[#353535] font-bold self-end md:text-lg">
          غذاهای ایرانی
        </h1>
        <CheckoutButton />
      </div>
      <FoodList filter="غذاهای ایرانی" />
      <FoodList title="غذاهای غیر ایرانی" filter="غذاهای غیر ایرانی" />
      <FoodList title="پیتزاها" filter="پیتزاها" />
      <FoodList title="ساندویچ‌ها" filter="ساندویچ‌ها" />
    </div>
  );
}
