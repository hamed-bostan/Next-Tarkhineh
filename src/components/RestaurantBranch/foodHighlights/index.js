import FoodList from "./FoodList";

export default function FoodHighlights() {
  return (
    <>
      <FoodList title="پیشنهاد ویژه" filter="پیشنهاد ویژه" />
      <FoodList
        title="غذاهای محبوب"
        filter="غذاهای محبوب"
        containerStyle="bg-[#315F41]"
        titleStyle="text-[#fff]"
      />
      <FoodList title="غذاهای غیر ایرانی" filter="غذاهای غیر ایرانی" />
    </>
  );
}
