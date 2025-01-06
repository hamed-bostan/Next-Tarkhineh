import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import Link from "next/link";
import { X } from "lucide-react";
import { Button } from "../../ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function NavigationMobile({ data, isDrawerOpen, handleClose }) {
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
          {data.map((item, index) => (
            <NavigationList
              key={item.id}
              item={item}
              isLast={index < data.length - 1}
            />
          ))}
        </div>
      </DrawerContent>
    </Drawer>
  );
}

function NavigationList({ item, isLast }) {
  return (
    <>
      <Link href={item.path} className="flex items-center gap-x-1 py-2">
        <img src={item.image} alt={item.text} className="w-4 h-4" />
        <span className="text-sm">{item.text}</span>
      </Link>
      {isLast && <Separator />}
    </>
  );
}
