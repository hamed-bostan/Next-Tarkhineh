import FoodList from "./FoodList";

export default function FoodHighlights() {
  return (
    <>
      <FoodList title="پیشنهاد ویژه" filter="پیشنهاد ویژه" />
      <FoodList title="غذاهای محبوب" filter="غذاهای محبوب" />
      <FoodList title="غذاهای غیر ایرانی" filter="غذاهای غیر ایرانی" />
    </>
  );
}
