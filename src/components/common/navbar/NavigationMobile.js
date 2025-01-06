import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { X } from "lucide-react";
import { Button } from "../../ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavigationMobile({ navigationItems, isDrawerOpen, handleClose }) {
  const filteredItems = navigationItems.filter((item) => item.path !== "/franchise");

  return (
    <Drawer open={isDrawerOpen} onOpenChange={handleClose}>
      <DrawerContent className="md:hidden">
        <DrawerHeader className="relative gap-0">
          <Image
            width={200}
            height={80}
            src="/assets/images/bannerImages/banner-sidebar.jpg"
            alt="Banner image"
            className="w-full h-full"
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
        <div className="px-4">
          {filteredItems.map((item, index) => (
            <NavigationList
              key={item.id}
              item={item}
              isLast={index < filteredItems.length - 1}
            />
          ))}
        </div>
      </DrawerContent>
    </Drawer>
  );
}

function NavigationList({ item, isLast }) {
  const pathname = usePathname();

  return (
    <>
      <Link href={item.path} className="flex items-center gap-x-1 py-2">
        <Image
          src={item.image}
          alt={item.text}
          width={30}
          height={30}
          className={`w-3 h-3 ${pathname === item.path ? "w-4 h-4" : ""}`}
        />
        <span
          className={`text-xs text-[#353535] ${
            pathname === item.path ? "text-[#417F56] text-lg font-bold" : ""
          }`}
        >
          {item.text}
        </span>
      </Link>
      {isLast && <Separator />}
    </>
  );
}
