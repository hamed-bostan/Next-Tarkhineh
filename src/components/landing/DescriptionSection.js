import Image from "next/image";
import { Button } from "../ui/button";

const cardItems = [
  {
    id: "1",
    icon: "/assets/images/icons/user_02.png",
    text: "پرسنلی مجرب و حرفه‌ای",
  },
  {
    id: "2",
    icon: "/assets/images/icons/diagram.png",
    text: "کیفیت بالای غذاها",
  },
  {
    id: "3",
    icon: "/assets/images/icons/home-wifi.png",
    text: "محیطی دلنشین و آرام",
  },
  {
    id: "4",
    icon: "/assets/images/icons/menu-board.png",
    text: "منوی متنوع",
  },
];

export default function DescriptionSection() {
  return (
    <section className="bg-[url('/assets/images/bannerImages/about.png')] bg-cover bg-center h-80 px-5 py-4">
      <div className="text-white text-sm mb-6">
        <span className="block mb-2">رستوران‌های زنجیره‌ای ترخینه</span>
        <p className="mb-2">
          مهمان‌نوازی یکی از مهم‌ترین مشخصه‌های ایرانیان است و باعث افتخار ماست
          که بیش از 20 سال است خدمت‌گزار مردم شریف ایران هستیم. ما در
          رستوران‌های زنجیره‌ای ترخینه همواره تلاش کردیم که در محیطی اصیل بر
          پایه معماری و طراحی مدرن در کنار طبیعتی دلنواز، غذایی سالم و درخور شان
          شما عزیزان ارائه دهیم.
        </p>
        <Button variant="outlined">اطلاعات بیشتر</Button>
      </div>
      <CardSection data={cardItems} />
    </section>
  );
}

function CardSection({ data }) {
  return (
    <div className="grid grid-cols-2 gap-x-12 gap-y-4">
      {data.map((item) => (
        <div key={item.id} className="flex flex-col gap-y-1 items-center">
          <Image
            src={item.icon}
            alt={item.text}
            width={50}
            height={50}
            className="w-6 h-6"
          />
          <span className="text-white text-sm">{item.text}</span>
        </div>
      ))}
    </div>
  );
}
