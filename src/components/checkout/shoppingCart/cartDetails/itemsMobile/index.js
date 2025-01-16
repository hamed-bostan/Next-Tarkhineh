import CartSummary from "../CartSummary";
import ItemsCard from "./ItemsCard";

export default function ItemsMobile({ selectedItems }) {
  return (
    <div className="border border-[#CBCBCB] rounded-lg p-5 md:hidden">
      <div className="h-52 overflow-y-scroll mb-3">
        {selectedItems.map((foodItem, index) => (
          <ItemsCard foodItem={foodItem} key={foodItem.id} index={index} />
        ))}
      </div>
      <CartSummary />
    </div>
  );
}
