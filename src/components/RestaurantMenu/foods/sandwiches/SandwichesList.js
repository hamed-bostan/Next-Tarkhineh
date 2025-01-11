import SandwichesCard from "./SandwichesCard";

const sandwiches = [
  {
    id: "29",
    category: "ساندویچ‌ها",
    image: "/assets/images/foodImages/sandwich/sandwich_01.png",
    title: "ساندویچ کتلت",
    description:
      "سیب زمینی، لوبیا قرمز،  بلغور گندم، نعناع خشک، پودر زیره، پودر جوز هندی، گوجه فرنگی، روغن زیتون",
    highPrice: "۲۳۰٬۰۰۰",
    discount: "%۱۸",
    finalPrice: 205000,
    star: "some star",
    filter: "غذاهای محبوب",
  },
  {
    id: "30",
    category: "ساندویچ‌ها",
    image: "/assets/images/foodImages/sandwich/sandwich_02.png",
    title: "ساندویچ سوسیس",
    description: "سوسیس گیاهی، پیاز، سیب زمینی،  رب گوجه فرنگی",
    highPrice: "۲۰۵٬۰۰۰",
    discount: "%۳۵",
    finalPrice: 165000,
    star: "some star",
    filter: "غذاهای محبوب",
  },
  {
    id: "31",
    category: "ساندویچ‌ها",
    image: "/assets/images/foodImages/sandwich/sandwich_03.png",
    title: "ساندویچ کتلت کدو سبز",
    description: "کدو سبز، هویج، سیب زمینی، پیاز",
    highPrice: "",
    finalPrice: 145000,
    star: "some star",
  },
  {
    id: "32",
    category: "ساندویچ‌ها",
    image: "/assets/images/foodImages/sandwich/sandwich_04.png",
    title: "پنینی اسفناج",
    description:
      " قارچ، اسفناج، پیاز، پنیر پیتزا، خامه، پودر پاپریکا، گردو، سرکه بالزامیک، سس مایونز",
    highPrice: "۲۱۰٬۰۰۰",
    discount: "%۱۵",
    finalPrice: 190000,
    star: "some star",
    score: "(۲۰ امتیاز)",
    filter: "پیشنهاد ویژه",
  },
  {
    id: "33",
    category: "ساندویچ‌ها",
    image: "/assets/images/foodImages/sandwich/sandwich_04.png",
    title: "ساندویچ همبرگر",
    description: " قارچ، پیاز، پنیر پیتزا، گردو، سرکه بالزامیک، سس مایونز",
    highPrice: "۲۱۰٬۰۰۰",
    discount: "%۱۵",
    finalPrice: 190000,
    star: "some star",
    score: "(۲۰ امتیاز)",
  },
];

export default function SandwichesList() {
  return (
    <div className="flex flex-col gap-y-3">
      <h3 className="text-[#353535] font-bold">ساندویچ‌ها</h3>
      {sandwiches.map((foodItem) => {
        return <SandwichesCard foodItem={foodItem} key={foodItem.id} />;
      })}
    </div>
  );
}
