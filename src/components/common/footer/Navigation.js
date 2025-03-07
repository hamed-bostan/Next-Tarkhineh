import { X } from "lucide-react";
import { Instagram } from "lucide-react";
import { Linkedin } from "lucide-react";
import Link from "next/link";

const footerLinks = [
  { id: "1", text: "پرسش‌های متداول", to: "/faq" },
  { id: "2", text: "شعبه اکباتان", to: "/branch" },
  { id: "3", text: "قوانین ترخینه", to: "/faq" },
  { id: "4", text: "شعبه چالوس", to: "/branch" },
  { id: "5", text: "حریم خصوصی", to: "/faq" },
  { id: "6", text: "شعبه اقدسیه", to: "/branch" },
  { id: "7", text: "شعبه ونک", to: "/branch" },
];

const footerIcons = [
  { id: "1", image: X },
  { id: "2", image: Instagram },
  { id: "3", image: Linkedin },
];

export default function Navigation() {
  return (
    <div className="col-span-2 md:col-span-1 grid grid-cols-2 grid-rows-5 text-[#EDEDED]">
      <span className="text-sm mb-2 md:text-base md:mb-3 md:font-medium">
        دسترسی آسان
      </span>
      <span className="text-sm mb-2 md:text-base md:mb-3 md:font-medium">
        شعبه های ترخینه
      </span>
      {footerLinks.map((item, index) => (
        <Link href={item.to} className="w-fit" key={item.id}>
          <span
            key={item.id}
            className={`text-xs md:text-sm ${
              index < footerLinks.length - 1 ? "mb-1 md:mb-2" : ""
            }
          ${index === footerLinks.length - 1 ? "col-start-2" : ""}`}
          >
            {item.text}
          </span>
        </Link>
      ))}
      <div className="flex gap-x-2 row-start-5">
        {footerIcons.map((item) => (
          <item.image
            key={item.id}
            className="w-4 h-4 md:w-5 md:h-5 cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
}
