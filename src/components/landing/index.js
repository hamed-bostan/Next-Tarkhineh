"use client";

import { useState } from "react";
import Logo from "../common/logo";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import Link from "next/link";
import { X } from "lucide-react";
import { Button } from "../ui/button";

const navigationItems = [
  {
    id: 1,
    text: "صفحه اصلی",
    path: "/",
    image: "assets/images/icons/home.png",
  },
  {
    id: 2,
    text: "شعبه",
    icon: "assets/images/icons/arrow-down.png",
    path: "/branch",
    image: "assets/images/icons/menu-board_02.png",
  },
  {
    id: 3,
    text: "منو",
    icon: "assets/images/icons/arrow-down.png",
    path: "/menu",
    image: "assets/images/icons/home-hashtag.png",
  },
  {
    id: 4,
    text: "اعطای نمایندگی",
    path: "/franchise",
    image: "assets/images/icons/diagram_02.png",
  },
  {
    id: 5,
    text: "درباره ما",
    path: "/aboutUs",
    image: "assets/images/icons/profile-2user.png",
  },
  {
    id: 6,
    text: "تماس با ما",
    path: "/contact",
    image: "assets/images/icons/call-calling.png",
  },
];

export default function Landing() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  function handleOpen() {
    setIsDrawerOpen((prev) => true);
  }

  function handleClose() {
    setIsDrawerOpen((prev) => false);
  }

  return (
    <>
      <div className="flex items-center justify-between">
        <MenuIcon handleOpen={handleOpen} />
        <Logo
          size="h-8"
          className="text-blue-400 fill-blue-500 stroke-blue-950"
        />
      </div>
      <DrawerSection isDrawerOpen={isDrawerOpen} handleClose={handleClose} />
    </>
  );
}

function MenuIcon({ handleOpen }) {
  return (
    <img
      onClick={handleOpen}
      className="h-6"
      src="assets/images/icons/menu.png"
      alt="menu icon"
    />
  );
}

function DrawerSection({ isDrawerOpen, handleClose }) {
  return (
    <Drawer open={isDrawerOpen} onOpenChange={handleClose}>
      <DrawerContent>
        <DrawerHeader className="relative">
          <img
            src="assets/images/bannerImages/top_frame.png"
            alt=""
            className="navbar_top_frame_image"
          />
          <DrawerTitle />
          <DrawerDescription className="absolute top-4 left-4">
            <Button
              onClick={handleClose}
              variant="outline"
              className="border-none shadow-none bg-transparent text-white h-6 w-6"
            >
              <X />
            </Button>
          </DrawerDescription>
        </DrawerHeader>
        <div>
          {navigationItems.map((item) => (
            <div key={item.id} className="navigation-item">
              <Link href={item.path}>
                <img
                  src={item.image}
                  alt={item.text}
                  className="navigation-icon"
                />
                <span>{item.text}</span>
              </Link>
            </div>
          ))}
        </div>
        <DrawerFooter>
          <DrawerClose></DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
