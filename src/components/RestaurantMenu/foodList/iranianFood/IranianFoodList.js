import CheckoutButton from "../../CheckoutButton";
import IranianFoodCard from "./IranianFoodCard";

const iranianFood = [
  {
    id: "1",
    category: "غذاهای ایرانی",
    image: "/assets/images/foodImages/iranian_food/iranian_food_01.png",
    title: "کوفته برنجی",
    description: "برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
    highPrice: "180000",
    discount: "%35",
    finalPrice: 145000,
    star: "some star",
  },
  {
    id: "2",
    category: "غذاهای ایرانی",
    image: "/assets/images/foodImages/iranian_food/iranian_food_02.png",
    title: "کشک بادمجان",
    description: "بادمجان، کشک، نعناع خشک، مغز گردو، سیر، پیاز",
    highPrice: "",
    finalPrice: 95000,
    star: "some star",
  },
  {
    id: "3",
    category: "غذاهای ایرانی",
    image: "/assets/images/foodImages/iranian_food/iranian_food_03.png",
    title: "میرزا قاسمی",
    description: "بادمجان، گوجه فرنگی، تخم مرغ، سیر، رب گوجه فرنگی",
    highPrice: "165000",
    discount: "%10",
    finalPrice: 142500,
    star: "some star",
    filter: "پیشنهاد ویژه",
    mostSale: true,
  },
  {
    id: "4",
    category: "غذاهای ایرانی",
    image: "/assets/images/foodImages/iranian_food/iranian_food_04.png",
    title: "باقلاقاتوق",
    description: "پاچ باقلا، شوید خشک، کره، سیر، تخم مرغ",
    highPrice: "205000",
    discount: "%30",
    finalPrice: 180000,
    star: "some star",
    filter: "پیشنهاد ویژه",
    mostSale: true,
  },
  {
    id: "5",
    category: "غذاهای ایرانی",
    image: "/assets/images/foodImages/iranian_food/iranian_food_05.png",
    title: "فلافل",
    description: "نخود، پیاز، تخم گشنیز، سیر، جعفری، سیب زمینی",
    highPrice: "",
    finalPrice: 80000,
    star: "some star",
    mostSale: true,
  },
  {
    id: "6",
    category: "غذاهای ایرانی",
    image: "/assets/images/foodImages/iranian_food/iranian_food_06.png",
    title: "کله جوش",
    description: "کشک، گردو، پیاز، نعناع خشک",
    highPrice: "210000",
    discount: "%5",
    finalPrice: 20300,
    star: "some star",
    filter: "پیشنهاد ویژه",
    mostSale: true,
  },
  {
    id: "7",
    category: "غذاهای ایرانی",
    image: "/assets/images/foodImages/iranian_food/iranian_food_07.png",
    title: "بورانی بادمجان",
    description: "بادمجان قلمی، ماست چکیده، سیر، روغن زیتون، مغز گردو",
    highPrice: "170000",
    discount: "%22",
    finalPrice: 148000,
    star: "some star",
    score: "(۷۵ امتیاز)",
    filter: "پیشنهاد ویژه",
    mostSale: true,
  },
  {
    id: "8",
    category: "غذاهای ایرانی",
    image: "/assets/images/foodImages/iranian_food/iranian_food_08.png",
    title: "بادمجان شکم‌پر",
    description: "بادمجان، پیاز، گوجه فرنگی	، سبزی خشک",
    highPrice: "150000",
    discount: "%18",
    finalPrice: 136000,
    star: "some star",
    score: "(۳۲ امتیاز)",
    filter: "پیشنهاد ویژه",
    mostSale: true,
  },
  {
    id: "9",
    category: "غذاهای ایرانی",
    image: "/assets/images/foodImages/iranian_food/iranian_food_09.png",
    title: "دلمه برگ کلم",
    description: "کلم برگ، برنج، لپه پخته، پیاز، سبزی معطر رب",
    highPrice: "220000",
    discount: "%8",
    finalPrice: 209000,
    star: "some star",
    score: "(۵۲ امتیاز)",
    filter: "پیشنهاد ویژه",
  },
  {
    id: "10",
    category: "غذاهای ایرانی",
    image: "/assets/images/foodImages/iranian_food/iranian_food_10.png",
    title: "دلمه برگ مو",
    description: "پیاز، برنج، لپه، سبزی دلمه، سرکه",
    highPrice: "",
    finalPrice: 195000,
    star: "some star",
  },
  {
    id: "11",
    category: "غذاهای ایرانی",
    image: "/assets/images/foodImages/iranian_food/iranian_food_11.png",
    title: "کوکو سبزی",
    description: "تخم مرغ، گردو، سیر، آرد، روغن مایع سبزی کوکویی",
    highPrice: "300000",
    discount: "%10",
    finalPrice: 270000,
    star: "some star",
    filter: "پیشنهاد ویژه",
  },
  {
    id: "12",
    category: "غذاهای ایرانی",
    image: "/assets/images/foodImages/iranian_food/iranian_food_12.png",
    title: "کوکو سیب‌زمینی",
    description: "عدس، سیب زمینی، پیاز متوسط، تخم مرغ، پودر سیر، آرد سوخاری",
    highPrice: "135000",
    discount: "%20",
    finalPrice: 105000,
    star: "some star",
    filter: "پیشنهاد ویژه",
  },
];

export default function IranianFoodList() {
  return (
    <>
      <div className="flex justify-between mb-3 md:mb-5">
        <h3 className="text-sm text-[#353535] font-bold self-end md:text-lg">غذاهای ایرانی</h3>
        <CheckoutButton />
      </div>
      <div className="flex flex-col gap-y-3 mb-6">
        {iranianFood.map((foodItem) => {
          return <IranianFoodCard foodItem={foodItem} key={foodItem.id} />;
        })}
      </div>
    </>
  );
}
