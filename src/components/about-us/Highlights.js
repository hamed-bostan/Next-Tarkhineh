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
    <div className="flex px-5 py-3 bg-[#EDEDED] justify-between">
      {info.map((item) => (
        <div key={item.id} className="flex flex-col gap-y-2 items-center">
          <Image
            src={item.image}
            width={40}
            height={40}
            alt={item.text}
            className="w-4 h-4"
          />
          <span className="text-sm text-[#717171] text-center">
            {item.text}
          </span>
        </div>
      ))}
    </div>
  );
}
