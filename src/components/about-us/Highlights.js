import Image from "next/image";

const info = [
  {
    id: "1",
    image: "/assets/images/icons/user.svg",
    text: "پرسنلی مجرب و حرفه‌ای",
  },
  {
    id: "2",
    image: "/assets/images/icons/diagram.svg",
    text: "کیفیت بالای غذاها",
  },
  {
    id: "3",
    image: "/assets/images/icons/home-wifi.svg",
    text: "محیطی دلنشین و آرام",
  },
  {
    id: "4",
    image: "/assets/images/icons/menu-board.svg",
    text: "منوی متنوع",
  },
];

export default function Highlights() {
  return (
    <div className="grid grid-cols-4 px-5 py-3 bg-[#EDEDED] md:py-4">
      {info.map((item, index) => (
        <div
          key={item.id}
          className={`md:px-10 ${
            index < info.length - 1 ? "md:border-l md:border-[#CBCBCB]" : ""
          }`}
        >
          <Image
            src={item.image}
            width={40}
            height={40}
            alt={item.text}
            className="w-4 h-4 md:w-6 md:h-6 mx-auto mb-1 md:mb-2 lg:mb-3 lg:w-8 lg:h-8"
          />
          <span className="text-xs text-[#717171] text-center md:text-sm block">
            {item.text}
          </span>
        </div>
      ))}
    </div>
  );
}
