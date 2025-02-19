"use client";

import { Card, CardContent } from "@/components/ui/card";
import { CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";
import MyButton from "@/components/common/MyButton";
import { Heart } from "lucide-react";
import formatToPersianStyle from "@/lib/formattedPrice";
import discountPrice from "@/lib/discountPrice";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "@/redux/actions/cartAction";

export default function FoodCard({ item }) {
  return (
    <CarouselItem className="basis-auto">
      <Card className="shadow-none border border-[#CBCBCB] rounded-sm overflow-hidden w-48 md:w-52 md:rounded-lg">
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
  const { id, title, price, discount } = item;
  const discountedPrice = formatToPersianStyle(discountPrice(price, discount));

  const dispatch = useDispatch();

  // Access the cart from Redux store
  const cartItems = useSelector((state) => state.cart.selectedItems);
  const isAddedToCart = cartItems.some((item) => item.id === id); // Check if the item is in the cart

  function handleAddToCart() {
    if (!isAddedToCart) {
      dispatch(addItem(item));
    }
  }

  return (
    <div className="col-span-2 row-span-3 grid grid-cols-2 p-2 pt-1 text-[#353535] text-xs gap-y-1 md:text-sm md:gap-y-2 md:p-3 h-32 md:h-40">
      <h3 className="col-span-full text-center text-sm md:text-base md:font-semibold">
        {title}
      </h3>
      <Heart color="#ADADAD" className="w-4 h-4 cursor-pointer" />
      {discount && (
        <div className="flex gap-x-1 items-center mr-auto w-full">
          <span className="text-[#ADADAD] line-through">
            {formatToPersianStyle(price)}
          </span>
          <span className="text-[#C30000] bg-[#FFF2F2] rounded-lg text-center mr-auto min-w-8 md:min-w-10">
            {formatToPersianStyle(discount)} %
          </span>
        </div>
      )}
      <div className="flex gap-x-1 items-center col-start-1 row-start-3">
        <img
          src="/assets/images/icons/star-rate-fill.svg"
          alt="like icon"
          className="w-4 h-4"
        />
        <span>5</span>
      </div>
      <span className="mr-auto row-start-3 col-start-2">
        {discountedPrice} تومان
      </span>
      <MyButton
        onClick={handleAddToCart}
        label={isAddedToCart ? "افزوده شد" : "افزودن به سبد خرید"}
        buttonStyle={`col-span-2 bg-[#417F56] md:text-sm flex self-end ${
          isAddedToCart ? "bg-[#717171] pointer-events-none" : "bg-[#417F56] "
        }`}
      />
    </div>
  );
}
