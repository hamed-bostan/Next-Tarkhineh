"use client";

import { useState } from "react";
import Header from "./header";
import OrderOverview from "./orderOverview";
import Payments from "./payments";
import ShoppingCart from "./shoppingCart";
import { CheckoutTabProvider } from "@/context/CheckoutTabContext";

export default function Checkout() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [ShoppingCart, OrderOverview, Payments];

  const ActiveTabComponent = tabs[activeTab];

  return (
    <CheckoutTabProvider>
      <section className="px-5 py-6">
        <Header setActiveTab={setActiveTab} activeTab={activeTab} />
        <ActiveTabComponent />
      </section>
    </CheckoutTabProvider>
  );
}
