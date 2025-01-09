import { Card, CardContent } from "@/components/ui/card";
import { CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";
import MyButton from "@/components/common/MyButton";

export default function FoodCard({ item }) {
  return (
    <CarouselItem className="basis-auto">
      <Card className="shadow-none border border-[#CBCBCB] rounded-sm overflow-hidden w-48 md:min-h-80 md:w-52 md:rounded-lg">
        <CardContent className="p-0">
          <DisplayingImage item={item} />
          <OfferDetails item={item} />
        </CardContent>
      </Card>
    </CarouselItem>
  );
}

function DisplayingImage({ item }) {
  const { image, title } = item;
  return (
    <Image
      src={image}
      alt={title}
      width={110}
      height={110}
      className="h-28 w-full object-cover md:h-36"
    />
  );
}

function OfferDetails({ item }) {
  const { title, highPrice, discount, finalPrice } = item;
  return (
    <div className="col-span-2 row-span-3 grid grid-cols-2 p-2 pt-1 text-[#353535] text-xs gap-y-1 md:text-sm md:gap-y-2 md:p-3">
      <h3 className="col-span-full text-center text-sm md:text-base md:font-semibold">{title}</h3>
      <img
        src="/assets/images/icons/like.svg"
        alt="like icon"
        className="w-4 h-4"
      />
      <div className="flex gap-x-1 items-center mr-auto">
        <span className="text-[#ADADAD] line-through">{highPrice}</span>
        <span className="text-[#C30000] bg-[#FFF2F2] rounded-lg w-8 text-center">
          {discount}
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
      <span className="mr-auto">{finalPrice} تومان</span>
      <MyButton
        label="افزودن به سبد خرید"
        buttonStyle="col-span-2 mt-3 bg-[#417F56] md:text-sm md:mt-4"
      />
    </div>
  );
}
