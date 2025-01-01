import { Card, CardContent } from "@/components/ui/card";
import { CarouselItem } from "@/components/ui/carousel";

import { Button } from "../../ui/button";
import Image from "next/image";

export default function SpecialOfferCard({ item }) {
  return (
    <CarouselItem className="basis-auto">
      <Card className="shadow-none border border-[#CBCBCB] rounded-sm overflow-hidden w-48">
        <CardContent className=" p-0">
          <DisplayingImage item={item} />
          <OfferDetails item={item} />
        </CardContent>
      </Card>
    </CarouselItem>
  );
}

function DisplayingImage({ item }) {
  return (
    <Image
      src={item.image}
      alt={item.title}
      width={110}
      height={110}
      className="h-28 w-full object-cover"
    />
  );
}

function OfferDetails({ item }) {
  return (
    <div className="col-span-2 row-span-3 grid grid-cols-2 p-2 text-[#353535] text-sm gap-y-1">
      <h3 className="text-base font-bold col-span-full text-center">
        {item.title}
      </h3>
      <img
        src="/assets/images/icons/like.svg"
        alt="like icon"
        className="w-4 h-4"
      />
      <div className="flex gap-x-2 items-center">
        <span className="text-[#ADADAD] line-through">{item.highPrice}</span>
        <span className="text-[#C30000] bg-[#FFF2F2] rounded-lg px-1">
          {item.discount}
        </span>
      </div>
      <div className="flex gap-x-1 items-center">
        <img
          src="/assets/images/icons/star-rate-fill.svg"
          alt="like icon"
          className="w-4 h-4"
        />
        <span>5</span>
      </div>
      <div className="flex gap-x-2">
        <span>{item.finalPrice}</span>
        <span>تومان</span>
      </div>

      <Button className="bg-[#417F56] text-[#FFFFFF] col-span-2 mt-3">
        افزودن به سبد خرید
      </Button>
    </div>
  );
}
