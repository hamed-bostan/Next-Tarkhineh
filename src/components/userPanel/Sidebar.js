import { Heart, LogOut, MapPin, User, Wallet } from "lucide-react";
import Image from "next/image";
import { Separator } from "../ui/separator";

const itemLists = [
  { label: "پروفایل", icon: User, tabIndex: 0 },
  { label: "پیگیری سفارشات", icon: Wallet, tabIndex: 1 },
  { label: "علاقمندی‌ها", icon: Heart, tabIndex: 2 },
  { label: "آدرس‌های من", icon: MapPin, tabIndex: 3 },
  { label: "خروج", icon: LogOut, tabIndex: 4 },
];

export default function Sidebar({ setActiveTab, activeTab }) {
  return (
    <section className="hidden md:block border border-[#CBCBCB] rounded-lg px-2 py-4">
      <UserInformation />
      <Separator className="bg-[#757575]" />
      <SidebarMenu setActiveTab={setActiveTab} activeTab={activeTab} />
    </section>
  );
}

function UserInformation() {
  return (
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
  );
}

function SidebarMenu({ setActiveTab, activeTab }) {
  return (
    <div className="flex flex-col gap-y-2 mt-2">
      {itemLists.map((item, index) => (
        <div
          onClick={() => setActiveTab(item.tabIndex)}
          key={index}
          className={`
        text-[#353535] flex gap-x-1 w-fit items-center text-sm cursor-pointer 
        ${activeTab === item.tabIndex ? "text-[#417F56]" : ""}
        ${index === itemLists.length - 1 ? "text-[#C30000]" : ""}`}
        >
          <item.icon size={activeTab === item.tabIndex ? 20 : 16} />
          <span className="">{item.label}</span>
        </div>
      ))}
    </div>
  );
}
