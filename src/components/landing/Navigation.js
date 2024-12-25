"use client";

import Link from "next/link";

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

export default function Navigation() {
  return (
    <>
      {navigationItems.map((item) => (
        <div key={item.id} className="navigation-item">
          <Link href={item.path}>
            <img src={item.image} alt={item.text} className="navigation-icon" />
            <span>{item.text}</span>
          </Link>
        </div>
      ))}
    </>
  );
}
