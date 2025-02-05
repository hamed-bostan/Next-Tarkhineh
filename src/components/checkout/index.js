"use client";

import Header from "./header";
import OrderOverview from "./orderOverview";
import Payments from "./payments";
import ShoppingCart from "./shoppingCart";
import {
  CheckoutTabProvider,
  useCheckoutTab,
} from "@/context/CheckoutTabContext";

export default function Checkout() {
  return (
    <CheckoutTabProvider>
      <CheckoutContent />
    </CheckoutTabProvider>
  );
}

function CheckoutContent() {
  const { activeTab } = useCheckoutTab();

  const tabs = [ShoppingCart, OrderOverview, Payments];
  const ActiveTabComponent = tabs[activeTab];

  return (
    <section className="px-5 py-6">
      <Header />
      <ActiveTabComponent />
    </section>
  );
}
