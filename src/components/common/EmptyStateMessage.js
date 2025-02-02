import MyButton from "@/components/common/MyButton";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function EmptyStateMessage({ text, button }) {
  return (
    <div className="relative border border-[#CBCBCB] rounded-lg min-h-96">
      <Image
        src="/assets/images/icons/empty-icon.svg"
        alt="empty icon"
        width={100}
        height={100}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64"
      />
      <p className="text-nowrap text-[#717171] text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:text-sm lg:text-base">
        {text}
      </p>
      {button && (
        <Link href="/menu">
          <MyButton
            label="منوی رستوران"
            variant="outline"
            buttonStyle="text-[#417F56] border-[#417F56] absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-7 w-36 hover:text-[#FFFFFF] md:w-40 lg:w-48 md: translate-y-8"
          />
        </Link>
      )}
    </div>
  );
}
