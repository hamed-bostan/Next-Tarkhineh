import { Heart, LogOut, MapPin, User, Wallet } from "lucide-react";

export const userMenuItems = [
  { label: "پروفایل", icon: User, tabIndex: 0, href: "/userPanel" },
  { label: "پیگیری سفارشات", icon: Wallet, tabIndex: 1, href: "/userPanel" },
  { label: "علاقه مندی‌ها", icon: Heart, tabIndex: 2, href: "/userPanel" },
  { label: "آدرس‌های من", icon: MapPin, tabIndex: 3, href: "/userPanel" },
  {
    label: "خروج",
    icon: LogOut,
    tabIndex: 4,
    href: "/api/auth/signout?callbackUrl=/",
  },
];
