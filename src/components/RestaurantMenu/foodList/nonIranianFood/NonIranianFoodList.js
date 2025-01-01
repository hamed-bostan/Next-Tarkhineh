import NonIranianFoodCard from "./NonIranianFoodCard";

const nonIranianFoods = [
  {
    id: "13",
    category: "غذاهای غیر ایرانی",
    image: "/assets/images/foodImages/not_iranian_food/not_iranian_food_01.png",
    title: "پاستا سبزیجات",
    description: "پاستا، قارچ، گوجه، کدوی خوردشده، پیاز خلالی‌شده",
    highPrice: "۱۷۵٬۰۰۰",
    discount: "%۲۰",
    finalPrice: 140000,
    star: "some star",
  },
  {
    id: "14",
    category: "غذاهای غیر ایرانی",
    image: "/assets/images/foodImages/not_iranian_food/not_iranian_food_02.png",
    title: "پاستا بلونز",
    description:
      "اسپاگتی، گوشت چرخ کرده، هویج، ساقه کرفس، گوجه فرنگی، سیر، پیاز، پنیر پارمزان",
    highPrice: "۱۷۰٬۰۰۰",
    discount: "%۱۲",
    finalPrice: 160000,
    star: "some star",
  },
  {
    id: "15",
    category: "غذاهای غیر ایرانی",
    image: "/assets/images/foodImages/not_iranian_food/not_iranian_food_03.png",
    title: "راتاتویی",
    description:
      "بادمجان، گوجه فرنگی، کدو سبز، پیاز، رب گوجه فرنگی، روغن زیتون، پنیر پارمزان",
    highPrice: "۱۸۰٬۰۰۰",
    discount: "%۴۵",
    finalPrice: 95000,
    star: "some star",
    score: "(۴۳ امتیاز)",
  },
  {
    id: "16",
    category: "غذاهای غیر ایرانی",
    image: "/assets/images/foodImages/not_iranian_food/not_iranian_food_04.png",
    title: "لازانیا",
    description:
      "لازانیا، قارچ، ریحان تازه، جعفری تازه، گوجه فرنگی، پنیر پیتزا، بادمجان",
    highPrice: "",
    finalPrice: 150000,
    star: "some star",
    score: "(۴۸ امتیاز)",
  },
  {
    id: "17",
    category: "غذاهای غیر ایرانی",
    image: "/assets/images/foodImages/not_iranian_food/not_iranian_food_05.png",
    title: "سوشی",
    description:
      "جلبک دریایی/ نوری، برنج کته، سرکه سفید (یا سرکه برنج)، شکر، نمک دریا",
    highPrice: "۱۰۰٬۰۰۰",
    discount: "%۱۵",
    finalPrice: 85000,
    star: "some star",
    score: "(۷۰ امتیاز)",
  },
  {
    id: "18",
    category: "غذاهای غیر ایرانی",
    image: "/assets/images/foodImages/not_iranian_food/not_iranian_food_06.png",
    title: "پاکورا سبزیجات",
    description: "گرام ماسالا، پودر کاری، سیر له شده، ،گشنیز خرد شده",
    highPrice: "۱۲۵٬۰۰۰",
    discount: "%۸",
    finalPrice: 110000,
    star: "some star",
    score: "(۷۵ امتیاز)",
  },
  {
    id: "19",
    category: "غذاهای غیر ایرانی",
    image: "/assets/images/foodImages/not_iranian_food/not_iranian_food_07.png",
    title: "کالزونه اسفناج",
    description:
      "اسفناج، قارچ، پنیر موزارلا یا پنیر پیتزا، پنیر ریکوتا یا پنیر خامه ای، پیاز، سیر، روغن زیتون",
    highPrice: "۱۹۰٬۰۰۰",
    discount: "%۱۷",
    finalPrice: 177000,
    star: "some star",
    score: "(۶۲ امتیاز)",
  },
  {
    id: "20",
    category: "غذاهای غیر ایرانی",
    image: "/assets/images/foodImages/not_iranian_food/not_iranian_food_08.png",
    title: "پالاک پنیر ",
    description: "پنیر، اسفناج، گوجه، پیاز، سیر ",
    highPrice: "۲۰۰٬۰۰۰",
    discount: "%۱۵",
    finalPrice: 180000,
    star: "some star",
  },
];

export default function NonIranianFoodList() {
  return (
    <div className="flex flex-col gap-y-3 mb-6">
      <h3 className="text-[#353535] font-bold">غذاهای غیر ایرانی</h3>
      {nonIranianFoods.map((foodItem) => {
        return <NonIranianFoodCard foodItem={foodItem} key={foodItem.id} />;
      })}
    </div>
  );
}
