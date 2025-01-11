import PizzaCard from "./PizzaCard";

const pizza = [
  {
    id: "21",
    category: "پیتزاها",
    image: "/assets/images/foodImages/pizza/pizza_01.png",
    title: "پیتزا روکولا",
    description:
      "اسفناج، سبزی روکولا، آرد، پودر مایه خمیر، روغن زیتون، خردل، سیر، پنیر موزارلا و ",
    highPrice: "۱۹۵٬۰۰۰",
    discount: "%۱۲",
    finalPrice: 188000,
    star: "some star",
    filter: "غذاهای محبوب",
  },
  {
    id: "22",
    category: "پیتزاها",
    image: "/assets/images/foodImages/pizza/pizza_02.png",
    title: "پیتزا بادمجان و زیتون",
    description:
      "بادمجان کوچک، روغن زیتون، پنیر موزارلا، پنیر پارمزان، برگ ریحان، گوجه فرنگی، سس گوجه فرنگی",
    highPrice: "",
    finalPrice: 150000,
    star: "some star",
    filter: "غذاهای محبوب",
  },
  {
    id: "23",
    category: "پیتزاها",
    image: "/assets/images/foodImages/pizza/pizza_03.png",
    title: "پیتزا سبزیجات و خامه",
    description:
      "نخود فرنگی پخته شده، ذرت نیم پز، فلفل دلمه‌ای رنگی، قارچ، سیر یا پیازچه خردشده",
    highPrice: "۲۱۰٬۰۰۰",
    discount: "%۲۱",
    finalPrice: 185000,
    star: "some star",
    filter: "غذاهای محبوب",
  },
  {
    id: "24",
    category: "پیتزاها",
    image: "/assets/images/foodImages/pizza/pizza_04.png",
    title: "پیتزا قارچ",
    description:
      "قارچ، فلفل دلمه ای، رب گوجه فرنگی، پودر سیر، آویشن، مرزه، پنیر پیتزا گیاهی",
    highPrice: "۲۱۵٬۰۰۰",
    discount: "%۲۵",
    finalPrice: 175000,
    star: "some star",
    score: "(۳۳ امتیاز)",
    filter: "غذاهای محبوب",
  },
  {
    id: "25",
    category: "پیتزاها",
    image: "/assets/images/foodImages/pizza/pizza_05.png",
    title: "پیتزا پپرونی",
    description:
      "تافو، فلفل قرمز خشک شده، پودر دانه‌های خردل، دانه رازیانه، پاپریکا دودی، پودر سیر، شکر نارگیل، پودر بادیان رومی ",
    highPrice: "",
    finalPrice: 100000,
    star: "some star",
    score: "(۵۱ امتیاز)",
    filter: "غذاهای محبوب",
  },
  {
    id: "26",
    category: "پیتزاها",
    image: "/assets/images/foodImages/pizza/pizza_06.png",
    title: "پیتزا اسفناج",
    description: "اسفناج تازه، پیاز، سیر، پنیر پیتزا، قارچ",
    highPrice: "۲۸۰٬۰۰۰",
    discount: "%۱۰",
    finalPrice: 252000,
    star: "some star",
    filter: "غذاهای محبوب",
  },
  {
    id: "27",
    category: "پیتزاها",
    image: "/assets/images/foodImages/pizza/pizza_07.png",
    title: "پیتزا مارگاریتا",
    description: "گوجه فرنگی، ریحان، سیر، پنیر پیتزا",
    highPrice: "۱۶۵٬۰۰۰",
    discount: "%۱۳",
    finalPrice: 147000,
    star: "some star",
    filter: "غذاهای محبوب",
  },
  {
    id: "28",
    category: "پیتزاها",
    image: "/assets/images/foodImages/pizza/pizza_08.png",
    title: "پیتزا پنیر",
    description:
      "نان پیتزا، پنیر پیتزا، سس باربیکیو، گوجه فرنگی، سس کچاپ، سیر، روغن زیتون",
    highPrice: "۱۲۵٬۰۰۰",
    discount: "%۱۶",
    finalPrice: 105000,
    star: "some star",
    filter: "غذاهای محبوب",
  },
];

export default function PizzaList() {
  return (
    <div className="flex flex-col gap-y-3 mb-6">
      <h3 className="text-[#353535] font-bold">پیتزاها</h3>
      {pizza.map((foodItem) => {
        return <PizzaCard foodItem={foodItem} key={foodItem.id} />;
      })}
    </div>
  );
}
