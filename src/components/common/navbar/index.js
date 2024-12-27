"use client";

import { useState } from "react";
import Logo from "../logo";
import Image from "next/image";
import NavigationMobile from "./NavigationMobile";
import NavigationDesktop from "./NavigationDesktop";

const navigationItems = [
  {
    id: "1",
    text: "صفحه اصلی",
    path: "/",
    image: "assets/images/icons/home.png",
  },
  {
    id: "2",
    text: "شعبه",
    icon: "assets/images/icons/arrow-down.png",
    path: "/branch",
    image: "assets/images/icons/menu-board_02.png",
  },
  {
    id: "3",
    text: "منو",
    icon: "assets/images/icons/arrow-down.png",
    path: "/menu",
    image: "assets/images/icons/home-hashtag.png",
  },
  {
    id: "4",
    text: "اعطای نمایندگی",
    path: "/franchise",
    image: "assets/images/icons/diagram_02.png",
  },
  {
    id: "5",
    text: "درباره ما",
    path: "/about-us",
    image: "assets/images/icons/profile-2user.png",
  },
  {
    id: "6",
    text: "تماس با ما",
    path: "/contact-us",
    image: "assets/images/icons/call-calling.png",
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
    <div className="flex items-center justify-between py-4 px-5 md:px-7 lg:px-28 md:py-9">
      <MenuIcon handleOpen={handleOpen} />
      <Logo size="h-8" />
      <NavigationMobile
        isDrawerOpen={isDrawerOpen}
        handleClose={handleClose}
        data={navigationItems}
      />
      <NavigationDesktop data={navigationItems} />
      <ActionButton />
    </div>
  );
}

function MenuIcon({ handleOpen }) {
  return (
    <img
      onClick={handleOpen}
      className="h-6 md:hidden"
      src="assets/images/icons/menu.png"
      alt="menu icon"
    />
  );
}

function ActionButton() {
  return (
    <div className="flex items-center gap-x-1">
      <Image
        src="assets/images/icons/search-normal.svg"
        alt="cart icon"
        width={50}
        height={50}
        className="hidden md:block h-4 w-4 bg-[#E5F2E9] p-2 box-content rounded-sm"
      />
      <Image
        src="assets/images/icons/shopping-cart.svg"
        alt="cart icon"
        width={50}
        height={50}
        className="h-4 w-4 bg-[#E5F2E9] p-2 box-content rounded-sm"
      />
      <Image
        src="/assets/images/icons/user.svg"
        alt="user icon"
        width={50}
        height={50}
        className="h-4 w-4 bg-[#E5F2E9] p-2 box-content rounded-sm"
      />
    </div>
  );
}
