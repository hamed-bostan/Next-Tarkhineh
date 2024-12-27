import React from "react";
import Navbar from "./navbar";
import Header from "./Header";
import MenuSection from "./MenuSection";
import DescriptionSection from "./DescriptionSection";
import BranchOverview from "./BranchOverview";
import Footer from "../common/Footer";

export default function index() {
  return (
    <>
      <Navbar />
      <Header />
      <MenuSection />
      <DescriptionSection />
      <BranchOverview />
      <Footer />
    </>
  );
}
