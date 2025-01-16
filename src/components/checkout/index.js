"use client";

import { useState } from "react";
import Header from "./header";
import OrderOverview from "./orderOverview";
import Payments from "./payments";
import ShoppingCart from "./shoppingCart";

export default function Checkout() {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState(0); // 0: ShoppingCart, 1: OrderOverview, 2: Payments

  // Array of components to render
  const tabs = [ShoppingCart, OrderOverview, Payments];

  // Get the active tab component
  const ActiveTabComponent = tabs[activeTab];

  return (
    <>
      <Header setActiveTab={setActiveTab} activeTab={activeTab} />
      {/* Render the active tab component */}
      <ActiveTabComponent />
    </>
  );
}
