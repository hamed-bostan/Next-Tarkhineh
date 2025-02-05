import { useCheckoutTab } from "@/context/CheckoutTabContext";
import { tabsConfig } from "./TabsConfig";

export default function HeaderDesktop() {
  const { activeTab, setActiveTab } = useCheckoutTab();

  return (
    <div className="hidden md:flex justify-between mb-7">
      {tabsConfig.map((tab) => (
        <div
          key={tab.tabIndex}
          onClick={() => setActiveTab(tab.tabIndex)}
          className="flex gap-x-1 cursor-pointer items-center"
        >
          <tab.icon
            size={activeTab === tab.tabIndex ? 26 : 20}
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
