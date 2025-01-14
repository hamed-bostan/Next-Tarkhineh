import { User, Wifi, ChartSpline, NotepadText } from "lucide-react";

const info = [
  {
    id: "1",
    image: User,
    text: "پرسنلی مجرب و حرفه‌ای",
  },
  {
    id: "2",
    image: ChartSpline,
    text: "کیفیت بالای غذاها",
  },
  {
    id: "3",
    image: Wifi,
    text: "محیطی دلنشین و آرام",
  },
  {
    id: "4",
    image: NotepadText,
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
          <item.image className="w-4 h-4 md:w-6 md:h-6 mx-auto mb-1 md:mb-2 lg:mb-3 lg:w-8 lg:h-8 text-[#353535]" />
          <span className="text-xs text-[#717171] text-center md:text-sm block">
            {item.text}
          </span>
        </div>
      ))}
    </div>
  );
}
