import Image from "next/image";
import { Button } from "../ui/button";

export default function FoodCard({ foodItem }) {
  return (
    <div className="h-28 grid grid-cols-3 grid-rows-3 border border-[#CBCBCB] rounded-md overflow-hidden">
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
      className="w-full h-full row-span-3"
    />
  );
}

function FoodDetails({ foodItem }) {
  const { title, description, highPrice, discount, finalPrice, star } =
    foodItem;

  return (
    <div className="col-span-2 row-span-3 grid grid-cols-2 p-2 text-[#353535] text-sm">
      <h3 className="text-base font-bold">{title}</h3>
      <div className="flex gap-x-2 items-center">
        <span className="text-[#ADADAD] line-through">{highPrice}</span>
        <span className="text-[#C30000] bg-[#FFF2F2] rounded-lg px-1">
          {discount}
        </span>
      </div>
      <p>{description.slice(0, 10)} ...</p>
      <div className="flex gap-x-2">
        <span>{finalPrice}</span>
        <span>تومان</span>
      </div>
      <div className="flex gap-x-2 items-center">
        <img
          src="/assets/images/icons/like.svg"
          alt="like icon"
          className="w-4 h-4"
        />
        <span>{star}</span>
      </div>
      <Button className="bg-[#417F56] text-[#FFFFFF]">
        افزودن به سبد خرید
      </Button>
    </div>
  );
}
