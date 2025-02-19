"use client";

import Image from "next/image";
import MyButton from "@/components/common/MyButton";
import { Heart } from "lucide-react";
import formatToPersianStyle from "@/lib/formattedPrice";
import discountPrice from "@/lib/discountPrice";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "@/redux/actions/cartAction";

export default function FoodCard({ item }) {
  return (
    <div className="border border-[#CBCBCB] rounded-sm overflow-hidden w-[9.5rem] md:w-48 md:rounded-lg">
      <DisplayingImage item={item} />
      <OfferDetails item={item} />
    </div>
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
      className="h-24 w-full object-cover md:h-36"
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
    <div className="grid grid-cols-[1fr_auto] p-2 gap-y-2 md:gap-y-3 md:p-3 text-[#353535] text-xs md:text-sm h-32 md:h-40">
      <h3 className="md:font-semibold">{title}</h3>
      <Heart
        color="#C30000"
        className="w-4 h-4 cursor-pointer mr-auto"
        fill="#C30000"
      />
      <div className="flex items-center">
        <img
          src="/assets/images/icons/star-rate-fill.svg"
          alt="like icon"
          className="w-4 h-4"
        />
        <span className="md:hidden">5</span>
      </div>
      <span className="mr-auto">{discountedPrice} تومان</span>
      <MyButton
        onClick={handleAddToCart}
        label={isAddedToCart ? "افزوده شد" : "افزودن به سبد خرید"}
        buttonStyle={`bg-[#417F56] md:text-sm col-span-full flex self-end ${
          isAddedToCart ? "bg-[#717171] pointer-events-none" : "bg-[#417F56] "
        }`}
      />
    </div>
  );
}
