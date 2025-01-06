"use client";

import { useState } from "react";
import Logo from "../logo";
import NavigationMobile from "./NavigationMobile";
import NavigationDesktop from "./NavigationDesktop";
import Image from "next/image";

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
    <div className="flex items-center justify-between py-4 px-5 md:px-7 lg:px-28 md:py-9">
      <MenuIcon handleOpen={handleOpen} />
      <Logo size="h-8" />
      <NavigationMobile
        isDrawerOpen={isDrawerOpen}
        handleClose={handleClose}
        navigationItems={navigationItems}
      />
      <NavigationDesktop data={navigationItems} />
      <ActionButton />
    </div>
  );
}

function MenuIcon({ handleOpen }) {
  return (
    <Image
      onClick={handleOpen}
      className="h-6 w-6 md:hidden"
      src="/assets/images/icons/menu.svg"
      alt="menu icon"
      width={30}
      height={30}
      sizes="30px"
    />
  );
}

function ActionButton() {
  return (
    <div className="flex items-center gap-x-1">
      <Image
        src="/assets/images/icons/search-normal.svg"
        alt="search icon"
        width={30}
        height={30}
        sizes="40px"
        className="hidden md:block h-4 w-4 bg-[#E5F2E9] p-2 box-content rounded-sm"
      />
      <Image
        src="/assets/images/icons/shopping-cart.svg"
        alt="cart icon"
        width={30}
        height={30}
        sizes="40px"
        className="h-4 w-4 bg-[#E5F2E9] p-2 box-content rounded-sm"
      />
      <Image
        src="/assets/images/icons/user.svg"
        alt="user icon"
        width={30}
        height={30}
        sizes="40px"
        className="h-4 w-4 bg-[#E5F2E9] p-2 box-content rounded-sm"
      />
    </div>
  );
}
