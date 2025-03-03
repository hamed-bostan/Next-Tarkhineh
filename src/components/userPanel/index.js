"use client";

import { useState } from "react";
import OrderStatus from "./orderStatus";
import Favorites from "./favorites";
import Logout from "./logout";
import Sidebar from "./Sidebar";
import Profile from "./profile";
import HeaderMobile from "./header/HeaderMobile";
import MyAddresses from "./myAddresses";

export default function UserPanel() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [Profile, OrderStatus, Favorites, MyAddresses, Logout];

  const ActiveTabComponent = tabs[activeTab];

  return (
    <section className="px-5 py-6 lg:px-10 2xl:px-28">
      <HeaderMobile setActiveTab={setActiveTab} activeTab={activeTab} />
      <div className="md:grid md:grid-cols-[30fr_70fr] md:gap-x-5">
        <Sidebar setActiveTab={setActiveTab} activeTab={activeTab} />
        <ActiveTabComponent />
      </div>
    </section>
  );
}
