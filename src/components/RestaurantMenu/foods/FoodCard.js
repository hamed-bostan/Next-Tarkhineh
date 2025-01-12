import MyButton from "@/components/common/MyButton";
import Image from "next/image";

export default function FoodCard({ foodItem }) {
  return (
    <div className="h-28 grid grid-cols-[auto_1fr_1fr] grid-rows-3 border border-[#CBCBCB] rounded-md overflow-hidden md:hover:shadow-md lg:h-32">
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
  const { title, description, highPrice, discount, finalPrice, star } =
    foodItem;

  return (
    <div className="col-span-2 row-span-3 grid grid-cols-2 p-2 text-[#353535] text-xs md:text-sm lg:p-3">
      <h3 className="text-sm md:text-base md:font-semibold">{title}</h3>
      <div className="flex gap-x-2 items-center mr-auto">
        <span className="text-[#ADADAD] line-through">{highPrice}</span>
        <span className="text-[#C30000] bg-[#FFF2F2] rounded-lg px-1">
          {discount}
        </span>
      </div>
      <p>{description.slice(0, 10)} ...</p>
      <div className="flex gap-x-2 mr-auto">
        <span>{finalPrice}</span>
        <span>تومان</span>
      </div>
      <div className="flex gap-x-2 items-center min-w-fit">
        <img
          src="/assets/images/icons/like.svg"
          alt="like icon"
          className="w-4 h-4"
        />
        <span>{star}</span>
      </div>
      <MyButton
        label="افزودن به سبد خرید"
        buttonStyle="bg-[#417F56] text-[0.688rem] p-0 md:text-xs lg:text-sm"
      />
    </div>
  );
}
