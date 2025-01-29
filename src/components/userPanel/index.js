"use client";

import { useState } from "react";
import OrderStatus from "./orderStatus";
import Favorites from "./favorites";
import MyAddresses from "./myAddresses";
import Logout from "./logout";
import Profile from "./profile";
import Header from "./header";
import Sidebar from "./Sidebar";

export default function UserPanel() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [Profile, OrderStatus, Favorites, MyAddresses, Logout];

  const ActiveTabComponent = tabs[activeTab];

  return (
    <section className="px-5 py-6">
      <Header setActiveTab={setActiveTab} activeTab={activeTab} />
      <Sidebar />
      <ActiveTabComponent />
    </section>
  );
}
