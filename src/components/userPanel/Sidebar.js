import { Heart, LogOut, MapPin, User, Wallet } from "lucide-react";
import Image from "next/image";
import { Separator } from "../ui/separator";

const itemLists = [
  { label: "پروفایل", icon: User },
  { label: "پیگیری سفارشات", icon: Wallet },
  { label: "علاقمندی‌ها", icon: Heart },
  { label: "آدرس‌های من", icon: MapPin },
  { label: "خروج", icon: LogOut },
];

export default function Sidebar() {
  return (
    <section className="hidden md:block border border-[#CBCBCB] rounded-lg px-2 py-4">
      <div className="flex gap-x-5 items-center mb-2">
        <Image
          src="/assets/images/avatars/01.png"
          width={100}
          height={100}
          alt="user avatar"
          className="w-20 h-20"
        />
        <div className="flex flex-col gap-y-2">
          <span className="text-sm text-[#353535]">محمد محمدی</span>
          <span className="text-xs text-[#717171]">09121234567</span>
        </div>
      </div>
      <Separator className="bg-[#757575]" />
      <div className="flex flex-col gap-y-2 mt-2">
        {itemLists.map((item, index) => (
          <div
            key={index}
            className={`flex gap-x-1 items-center ${
              index === itemLists.length - 1
                ? "text-[#C30000]"
                : "text-[#353535]"
            }`}
          >
            <item.icon className="w-4 h-4" />
            <span className="text-sm">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
