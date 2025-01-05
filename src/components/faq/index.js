"use client";

import Banner from "../common/Banner";
import { useState } from "react";
import ContentSection from "./ContentSection";
import { tabDetails } from "@/lib/faq";

export default function FAQ() {
  const [activeTab, setActiveTab] = useState("faq");

  function handleTabClick(tab) {
    setActiveTab(tab);
  }

  return (
    <>
      <Banner
        imageSrc="/assets/images/bannerImages/banner-faq.jpg"
        text="سوالات متداول از ترخینه"
        isButton={false}
      />
      <CategoryNavigation
        handleTabClick={handleTabClick}
        activeTab={activeTab}
      />
      <ContentDisplay activeTab={activeTab} />
    </>
  );
}

function CategoryNavigation({ handleTabClick, activeTab }) {
  return (
    <div className="text-sm text-[#717171] bg-[#EDEDED] flex gap-x-4 h-10 px-5 items-center">
      <span
        onClick={() => handleTabClick("faq")}
        className={activeTab === "faq" ? "font-bold" : ""}
      >
        سوالات متداول
      </span>
      <span
        onClick={() => handleTabClick("rules")}
        className={activeTab === "rules" ? "font-bold" : ""}
      >
        قوانین ترخینه
      </span>
      <span
        onClick={() => handleTabClick("privacyPolicy")}
        className={activeTab === "privacyPolicy" ? "font-bold" : ""}
      >
        حریم خصوصی
      </span>
    </div>
  );
}

function ContentDisplay({ activeTab }) {
  const filteredSections = tabDetails.filter(
    (section) => section.category === activeTab
  );

  return (
    <div className="px-5 pt-3 pb-6">
      <div className="border border-[#CBCBCB] rounded-sm">
        {filteredSections.map((section) => (
          <ContentSection key={section.id} details={[section]} />
        ))}
      </div>
    </div>
  );
}
