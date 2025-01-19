"use client";

import { useDispatch } from "react-redux";
import { addItem } from "@/redux/actions/cartAction";

import MyButton from "@/components/common/MyButton";
import Image from "next/image";
import { Heart } from "lucide-react";
import formatToPersianStyle from "@/lib/formattedPrice";
import discountPrice from "@/lib/discountPrice";

export default function FoodCard({ foodItem }) {
  return (
    <div className="min-h-24 grid grid-cols-[auto_1fr_1fr] grid-rows-3 border border-[#CBCBCB] rounded-sm overflow-hidden md:hover:shadow-md md:min-h-32 lg:rounded-lg">
      <FoodImage {...foodItem} />
      <FoodDetails foodItem={foodItem} />
    </div>
  );
}

function FoodImage({ image, title }) {
  return (
    <Image
      src={image}
      width={80}
      height={80}
      alt={title}
      className="h-full row-span-3 w-24 md:w-32 lg:w-40"
    />
  );
}

function FoodDetails({ foodItem }) {
  const { title, description, price, discount, star } = foodItem;

  const discountedPrice = formatToPersianStyle(discountPrice(price, discount));

  const dispatch = useDispatch();

  function handleAddToCart() {
    dispatch(addItem(foodItem));
  }

  return (
    <div className="col-span-2 row-span-3 grid grid-cols-2 p-2 text-[#353535] text-xs md:text-sm lg:p-0 lg:py-3 lg:ml-3 lg:mr-5 lg:gap-y-1">
      <h3 className="text-sm md:text-base md:font-semibold self-center lg:self-start">
        {title}
      </h3>
      {discount && (
        <div className="flex gap-x-2 items-center mr-auto md:row-start-2 md:col-start-2">
          <span className="text-[#ADADAD] line-through">
            {formatToPersianStyle(price)}
          </span>
          <span className="text-[#C30000] bg-[#FFF2F2] rounded-lg px-1">
            {formatToPersianStyle(discount)} %
          </span>
        </div>
      )}
      <p className="self-center col-start-1 row-start-2 md:row-span-2 md:self-start">
        {description.slice(0, 10)} ...
      </p>
      <div className="flex gap-x-2 mr-auto row-start-2 col-start-2 md:col-start-2 items-center md:row-start-3">
        <span>{discountedPrice}</span>
        <span>تومان</span>
      </div>
      <Heart
        color="#717171"
        className="w-4 h-4 row-start-3 col-start-1 md:row-start-1 md:col-start-2 md:mr-auto self-center lg:self-start lg:w-5 lg:h-5 cursor-pointer"
      />
      <span className="row-start-3 col-start-1 mr-6 md:row-start-4 md:mr-0 self-center">
        {star}
      </span>
      <MyButton
        onClick={handleAddToCart}
        label="افزودن به سبد خرید"
        buttonStyle="bg-[#417F56] text-[0.688rem] p-0 md:text-xs lg:text-sm row-start-3 col-start-2 md:row-start-4  self-center h-8"
      />
    </div>
  );
}
