import MyButton from "@/components/common/MyButton";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function EmptyCartMessage() {
  return (
    <div className="mx-auto my-auto relative">
      <Image
        src="/assets/images/icons/empty-icon.svg"
        alt="empty icon"
        width={100}
        height={100}
        className="mx-auto"
      />
      <p className="text-nowrap text-[#717171] text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        شما در حال حاضر هیچ سفارشی ثبت نکرده‌اید!
      </p>
      <Link href="/menu">
        <MyButton
          label="منوی رستوران"
          variant="outline"
          buttonStyle="text-[#417F56] border-[#417F56] absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-3 md:hover:text-[#FFFFFF]"
        />
      </Link>
    </div>
  );
}
