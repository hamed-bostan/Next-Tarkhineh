"use client";

import Banner from "../common/Banner";
import { useState } from "react";
import ContentSection from "./ContentSection";
import { faqDetails } from "@/lib/faq";
import { privacyPolicyDetails } from "@/lib/faq";
import { rulesDetails } from "@/lib/faq";

const sections = [
  { id: "faq", title: "سوالات متداول", details: faqDetails },
  { id: "rules", title: "قوانین ترخینه", details: rulesDetails },
  { id: "privacy", title: "حریم خصوصی", details: privacyPolicyDetails },
];

export default function FAQ() {
  const [activeTab, setActiveTab] = useState("faq");

  return (
    <>
      <Banner
        imageSrc="/assets/images/bannerImages/banner-faq.jpg"
        text="سوالات متداول از ترخینه"
        isButton={false}
      />
      <div className="text-sm text-[#717171] bg-[#EDEDED] flex gap-x-4 h-10 px-5 items-center">
        {sections.map((section) => (
          <span key={section.id} onClick={() => setActiveTab(section.id)}>
            {section.title}
          </span>
        ))}
      </div>

      {sections.map(
        (section) =>
          activeTab === section.id && (
            <ContentSection key={section.id} details={section.details} />
          )
      )}
    </>
  );
}
