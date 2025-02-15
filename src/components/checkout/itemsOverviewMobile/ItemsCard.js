import QuantitySelector from "@/components/common/QuantitySelector";
import { useDispatch, useSelector } from "react-redux";
import { increase, decrease, removeItem } from "@/redux/actions/cartAction";
import formatToPersianStyle from "@/lib/formattedPrice";
import discountPrice from "@/lib/discountPrice";

export default function ItemsCard({ foodItem, index }) {
  const { id, price, discount, title } = foodItem;

  const dispatch = useDispatch();
  const selectedItems = useSelector((state) => state.cart.selectedItems);

  // Check if the current food item is selected
  const selectedItem = selectedItems.find((item) => item.id === id);

  const handleIncrease = () => dispatch(increase(id));
  const handleDecrease = () => dispatch(decrease(id));
  const handleRemove = () => dispatch(removeItem(id));

  const discountedPricePerItem = discountPrice(price, discount); // Price of a single item

  // Check if the current food item is selected
  const quantity = selectedItem?.quantity || 0;

  // Calculate total discounted price for the selected item
  const totalDiscountedPrice =
    quantity > 0
      ? formatToPersianStyle(discountedPricePerItem * quantity)
      : formatToPersianStyle(discountedPricePerItem);

  return (
    <div
      className={`grid grid-cols-2 p-2 ${
        index % 2 === 0 ? "bg-[#F9F9F9]" : "bg-[#EDEDED]"
      }`}
    >
      <div>
        <h3 className="text-[#353535] text-sm">{title}</h3>
        <span className="text-[#717171] text-xs">{totalDiscountedPrice}</span>
      </div>
      <QuantitySelector
        selectedItem={selectedItem}
        handleIncrease={handleIncrease}
        handleDecrease={handleDecrease}
        handleRemove={handleRemove}
        styles="mr-auto"
      />
    </div>
  );
}
