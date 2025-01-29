"use client";

import { useState } from "react";
import OrderStatus from "./orderStatus";
import Favorites from "./favorites";
import MyAddresses from "./myAddresses";
import Logout from "./logout";
import Sidebar from "./Sidebar";
import Profile from "./profile";
import HeaderMobile from "./header/HeaderMobile";

export default function UserPanel() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [Profile, OrderStatus, Favorites, MyAddresses, Logout];

  const ActiveTabComponent = tabs[activeTab];

  return (
    <section className="px-5 py-6">
      <HeaderMobile setActiveTab={setActiveTab} activeTab={activeTab} />
      <div className="md:grid md:grid-cols-[30fr_70fr] md:gap-x-5">
        <Sidebar />
        <ActiveTabComponent />
      </div>
    </section>
  );
}
