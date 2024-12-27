import React from "react";
import Navbar from "./navbar";
import Header from "./Header";
import MenuSection from "./MenuSection";
import DescriptionSection from "./DescriptionSection";

export default function index() {
  return (
    <>
      <Navbar />
      <Header />
      <MenuSection />
      <DescriptionSection />
    </>
  );
}
