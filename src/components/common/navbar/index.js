"use client";

import { useState } from "react";
import Logo from "../logo";
import NavigationMobile from "./NavigationMobile";
import NavigationDesktop from "./NavigationDesktop";
import { Menu } from "lucide-react";
import ActionButton from "./ActionButton";

const navigationItems = [
  {
    id: "1",
    text: "صفحه اصلی",
    path: "/",
    image: "/assets/images/icons/home.svg",
  },
  {
    id: "2",
    text: "شعبه",
    icon: "/assets/images/icons/arrow-down.svg",
    path: "/branch",
    image: "/assets/images/icons/menu-board.svg",
  },
  {
    id: "3",
    text: "منو",
    icon: "/assets/images/icons/arrow-down.svg",
    path: "/menu",
    image: "/assets/images/icons/home-hashtag.svg",
  },
  {
    id: "4",
    text: "اعطای نمایندگی",
    path: "/franchise",
  },
  {
    id: "5",
    text: "درباره ما",
    path: "/about-us",
    image: "/assets/images/icons/profile-2user.svg",
  },
  {
    id: "6",
    text: "تماس با ما",
    path: "/contact-us",
    image: "/assets/images/icons/call-calling.svg",
  },
];

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  function handleOpen() {
    setIsDrawerOpen((prev) => true);
  }

  function handleClose() {
    setIsDrawerOpen((prev) => false);
  }

  return (
    <div className="flex items-center justify-between py-4 px-5 md:py-9 lg:px-10 2xl:px-28">
      <MenuIcon handleOpen={handleOpen} />
      <Logo size="h-8" />
      <NavigationMobile
        isDrawerOpen={isDrawerOpen}
        handleClose={handleClose}
        navigationItems={navigationItems}
      />
      <NavigationDesktop navigationItems={navigationItems} />
      <ActionButton />
    </div>
  );
}

function MenuIcon({ handleOpen }) {
  return (
    <Menu
      color="#417F56"
      className="h-6 w-6 cursor-pointer md:hidden"
      onClick={handleOpen}
    />
  );
}
