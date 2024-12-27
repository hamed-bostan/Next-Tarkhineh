import React from "react";
import Navbar from "./navbar";
import Header from "./Header";
import MenuSection from "./MenuSection";
import DescriptionSection from "./DescriptionSection";
import BranchOverview from "./BranchOverview";

export default function index() {
  return (
    <>
      <Navbar />
      <Header />
      <MenuSection />
      <DescriptionSection />
      <BranchOverview />
    </>
  );
}
