import { Trash2 } from "lucide-react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { increase, decrease, removeItem } from "@/redux/actions/cartAction";
import QuantitySelector from "@/components/common/QuantitySelector";

export default function ItemsCard({ foodItem }) {
  return (
    <div className="min-h-24 grid grid-cols-[auto_1fr_1fr] grid-rows-3 border border-[#CBCBCB] rounded-sm overflow-hidden md:hover:shadow-md md:min-h-32 lg:min-h-36 lg:rounded-lg">
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
      className="h-full row-span-3 w-24 md:w-28 lg:w-40"
    />
  );
}

function FoodDetails({ foodItem }) {
  const { title, description, highPrice, discount, finalPrice, star } =
    foodItem;

  const dispatch = useDispatch();
  const selectedItems = useSelector((state) => state.cart.selectedItems);

  // Check if the current food item is selected
  const selectedItem = selectedItems.find((item) => item.id === foodItem.id);

  const handleIncrease = () => dispatch(increase(foodItem.id));

  const handleDecrease = () => dispatch(decrease(foodItem.id));

  const handleRemove = () => dispatch(removeItem(foodItem.id));

  return (
    <div className="col-span-2 row-span-3 grid grid-cols-2 md:grid-rows-4 lg:grid-rows-3 p-2 text-[#353535] md:text-sm lg:p-0 lg:py-3 lg:ml-3 lg:mr-5 md:gap-y-1 lg:gap-y-2 md:grid-cols-3">
      <h3 className="lg:text-base md:font-semibold md:col-span-2">{title}</h3>
      <div className="flex gap-x-2 items-center mr-auto md:row-start-2 md:col-start-3">
        <span className="text-[#ADADAD] line-through">{highPrice}</span>
        <span className="text-[#C30000] bg-[#FFF2F2] rounded-lg px-1">
          {discount}
        </span>
      </div>
      <p className="md:row-span-2 md:text-xs lg:text-sm md:row-start-2 md:col-span-2">
        {description.slice(0, 40)} ...
      </p>
      <div className="flex gap-x-2 mr-auto md:col-start-3 items-center md:row-start-4">
        <span>{finalPrice}</span>
        <span>تومان</span>
      </div>
      <Trash2
        color="#353535"
        size={16}
        className="md:row-start-1 md:mr-auto cursor-pointer lg:w-5 lg:h-5 md:col-start-3"
        onClick={handleRemove}
      />
      <div className="md:col-start-1 md:row-start-4 md:flex md:col-span-2 md:gap-x-2 lg:gap-x-4">
        <span className="self-center">{star}</span>
        <QuantitySelector
          selectedItem={selectedItem}
          handleIncrease={handleIncrease}
          handleDecrease={handleDecrease}
          handleRemove={handleRemove}
        />
      </div>
    </div>
  );
}
