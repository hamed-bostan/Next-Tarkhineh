import { ShoppingCart, SquareCheckBig, Wallet } from "lucide-react";
import { tabsConfig } from "./TabsConfig";

export default function HeaderDesktop({ setActiveTab, activeTab }) {
  return (
    <div className="hidden md:flex justify-between mb-7">
      {tabsConfig.map((tab) => (
        <div
          key={tab.tabIndex}
          onClick={() => setActiveTab(tab.tabIndex)}
          className="flex gap-x-1 cursor-pointer"
        >
          <tab.icon
            size={20}
            color={activeTab === tab.tabIndex ? "#417F56" : "#CBCBCB"}
          />
          <span
            className={`text-sm ${
              activeTab === tab.tabIndex
                ? "font-bold text-[#417F56]"
                : "text-[#CBCBCB]"
            }`}
          >
            {tab.label}
          </span>
        </div>
      ))}
    </div>
  );
}

function HeaderDesktopBackup() {
  return (
    <div className="hidden md:flex justify-between mb-7">
      <div className="flex gap-x-1">
        <ShoppingCart size={20} color="#417F56" />
        <span className="text-[#417F56] text-sm font-bold">سبد خرید</span>
      </div>
      <div className="flex gap-x-1">
        <SquareCheckBig size={20} color="#CBCBCB" />
        <span className="text-[#CBCBCB] text-sm">تکمیل اطلاعات</span>
      </div>
      <div className="flex gap-x-1">
        <Wallet size={20} color="#CBCBCB" />
        <span className="text-[#CBCBCB] text-sm">پرداخت</span>
      </div>
    </div>
  );
}
