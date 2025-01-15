import QuantitySelector from "@/components/common/QuantitySelector";
import { useDispatch, useSelector } from "react-redux";
import { increase, decrease, removeItem } from "@/redux/actions/cartAction";

export default function ItemsCard({ foodItem, index }) {
  const dispatch = useDispatch();
  const selectedItems = useSelector((state) => state.cart.selectedItems);

  // Check if the current food item is selected
  const selectedItem = selectedItems.find((item) => item.id === foodItem.id);

  const handleIncrease = () => dispatch(increase(foodItem.id));

  const handleDecrease = () => dispatch(decrease(foodItem.id));

  const handleRemove = () => dispatch(removeItem(foodItem.id));
  return (
    <div
      className={`grid grid-cols-2 p-2 ${
        index % 2 === 0 ? "bg-[#F9F9F9]" : "bg-[#EDEDED]"
      }`}
    >
      <div>
        <h3 className="text-[#353535] text-sm">{foodItem.title}</h3>
        <span className="text-[#717171] text-xs">{foodItem.finalPrice}</span>
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
