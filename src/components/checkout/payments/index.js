"use client";

import { useState } from "react";
import CartSummary from "../CartSummary";
import DiscountCode from "./DiscountCode";
import PaymentMethod from "./PaymentMethod";
import OnlinePayment from "./OnlinePayment";
import PayOnDelivery from "./PayOnDelivery";

export default function Payments() {
  const [selectedTab, setSelectedTab] = useState("OnlinePayment");

  return (
    <section className="md:grid md:grid-cols-[60fr_40fr] md:gap-x-4 lg:gap-x-6">
      <div>
        <DiscountCode />
        <PaymentMethod
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
        {selectedTab === "OnlinePayment" && <OnlinePayment />}
        {selectedTab === "PayOnDelivery" && <PayOnDelivery />}
      </div>
      <CartSummary />
    </section>
  );
}
