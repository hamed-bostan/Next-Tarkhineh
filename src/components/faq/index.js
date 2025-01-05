"use client";

import Banner from "../common/Banner";
import FAQSection from "./FAQSection";
import RulesSection from "./RulesSection";
import PrivacyPolicySection from "./PrivacyPolicySection";
import { useState } from "react";

export default function FAQ() {
  const [activeTab, setActiveTab] = useState("faq");

  function handleClick(newTab) {
    setActiveTab(newTab);
  }

  return (
    <>
      <Banner
        imageSrc="/assets/images/bannerImages/banner-faq.jpg"
        text="سوالات متداول از ترخینه"
        isButton={false}
      />
      <div className="text-sm text-[#717171] bg-[#EDEDED] flex gap-x-4 h-10 px-5 items-center">
        <span onClick={() => handleClick("faq")}>سوالات متداول</span>
        <span onClick={() => handleClick("rules")}>قوانین ترخینه</span>
        <span onClick={() => handleClick("privacy")}>حریم خصوصی</span>
      </div>
      {activeTab === "faq" && <FAQSection />}
      {activeTab === "rules" && <RulesSection />}
      {activeTab === "privacy" && <PrivacyPolicySection />}
    </>
  );
}
