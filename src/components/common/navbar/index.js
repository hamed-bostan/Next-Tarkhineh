"use client";

import { useState } from "react";
import Logo from "../logo";
import NavigationMobile from "./NavigationMobile";
import NavigationDesktop from "./NavigationDesktop";
import Link from "next/link";
import { Menu, Search, ShoppingCart, User } from "lucide-react";
import { usePathname } from "next/navigation";

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
      <NavigationDesktop navigationItems={navigationItems} />
      <ActionButton />
    </div>
  );
}

function MenuIcon({ handleOpen }) {
  return (
    <Menu color="#417F56" className="h-6 w-6 md:hidden" onClick={handleOpen} />
  );
}

function ActionButton() {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-x-1">
      <div className="bg-[#E5F2E9] p-2 box-content rounded-sm cursor-pointer">
        <Search color="#417F56" className="h-4 w-4" />
      </div>
      <Link
        href="/cart"
        className={`p-2 box-content rounded-sm ${
          pathname === "/cart" ? "bg-[#417F56]" : "bg-[#E5F2E9]"
        }`}
      >
        <ShoppingCart
          className={`h-4 w-4 ${
            pathname === "/cart" ? "text-[#fff]" : "text-[#417F56]"
          }`}
        />
      </Link>
      <div className="bg-[#E5F2E9] p-2 box-content rounded-sm cursor-pointer">
        <User color="#417F56" className="h-4 w-4" />
      </div>
    </div>
  );
}
