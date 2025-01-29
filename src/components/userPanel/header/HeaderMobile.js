"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { tabsConfig } from "./TabsConfig";

export default function HeaderMobile({ setActiveTab, activeTab }) {
  function handleNext() {
    if (activeTab < 4) {
      setActiveTab(activeTab + 1);
    }
  }

  function handlePrevious() {
    if (activeTab > 0) {
      setActiveTab(activeTab - 1);
    }
  }

  return (
    <div className="flex justify-between mb-6 md:hidden">
      <ArrowRight
        size={16}
        onClick={handleNext}
        className={`${
          activeTab === tabsConfig.length - 1
            ? "text-[#A0A0A0] pointer-events-none"
            : "text-[#353535] cursor-pointer"
        }`}
      />
      <h1 className="text-sm font-bold text-[#353535]">
        {tabsConfig[activeTab].label}
      </h1>
      <ArrowLeft
        color="#353535"
        size={16}
        onClick={handlePrevious}
        className={` ${activeTab === 0 ? "opacity-0" : "cursor-pointer"}`}
      />
    </div>
  );
}
