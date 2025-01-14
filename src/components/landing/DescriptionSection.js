import MyButton from "../common/MyButton";

import { User, Wifi, ChartSpline, NotepadText } from "lucide-react";

const cardItems = [
  {
    id: "1",
    icon: User,
    text: "پرسنلی مجرب و حرفه‌ای",
  },
  {
    id: "2",
    icon: ChartSpline,
    text: "کیفیت بالای غذاها",
  },
  {
    id: "3",
    icon: Wifi,
    text: "محیطی دلنشین و آرام",
  },
  {
    id: "4",
    icon: NotepadText,
    text: "منوی متنوع",
  },
];

export default function DescriptionSection() {
  return (
    <section className="bg-[url('/assets/images/bannerImages/about.png')] bg-cover bg-center px-5 py-4 md:h-80 md:px-10 lg:px-28 md:grid md:grid-cols-2 md:place-items-center lg:gap-x-10">
      <DescriptionDetails />
      <CardSection data={cardItems} />
    </section>
  );
}

function DescriptionDetails() {
  return (
    <div className="text-[#FFFFFF] mb-6 md:mb-0">
      <span className="block mb-2 md:text-lg md:mb-4">
        رستوران‌های زنجیره‌ای ترخینه
      </span>
      <p className="mb-3 text-xs text-justify md:text-sm md:mb-4">
        مهمان‌نوازی یکی از مهم‌ترین مشخصه‌های ایرانیان است و باعث افتخار ماست که
        بیش از 20 سال است خدمت‌گزار مردم شریف ایران هستیم. ما در رستوران‌های
        زنجیره‌ای ترخینه همواره تلاش کردیم که در محیطی اصیل بر پایه معماری و
        طراحی مدرن در کنار طبیعتی دلنواز، غذایی سالم و درخور شان شما عزیزان
        ارائه دهیم.
      </p>
      <MyButton
        label="اطلاعات بیشتر"
        variant="outline"
        imageSrc="/assets/images/icons/arrow-left.svg"
        alt="arrow left icon"
        iconStyle="w-4 h-4 order-2 md:w-5 md:h-5"
        buttonStyle="bg-transparent mr-auto hover:text-[#FFFFFF]"
      />
    </div>
  );
}

function CardSection({ data }) {
  return (
    <div className="grid grid-cols-2 gap-x-12 gap-y-4 md:gap-6 md:mr-auto">
      {data.map((item) => (
        <div key={item.id}>
          <item.icon className="w-6 h-6 md:w-7 md:h-7 mx-auto mb-1 md:mb-3 text-[#FFFFFF]" />
          <span className="text-center block text-[#FFFFFF] text-xs md:text-sm">
            {item.text}
          </span>
        </div>
      ))}
    </div>
  );
}
