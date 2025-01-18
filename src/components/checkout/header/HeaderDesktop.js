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
