import formatToPersianStyle from "@/lib/formattedPrice";
import { Minus, Plus, Trash2 } from "lucide-react";

export default function QuantitySelector({
  selectedItem,
  handleIncrease,
  handleDecrease,
  handleRemove,
  styles,
}) {
  return (
    <div
      className={`bg-[#E5F2E9] rounded-sm h-8 px-1 flex items-center gap-x-1 w-14 self-center ${styles}`}
    >
      <Plus
        color="#417F56"
        size={16}
        className="cursor-pointer"
        onClick={handleIncrease}
      />
      <span className="text-[#417F56] text-sm">
        {selectedItem ? formatToPersianStyle(selectedItem.quantity) : 1}
      </span>
      {selectedItem && selectedItem.quantity > 1 ? (
        <Minus
          color="#417F56"
          size={16}
          className="cursor-pointer"
          onClick={handleDecrease}
        />
      ) : (
        <Trash2
          color="#417F56"
          size={16}
          className="cursor-pointer"
          onClick={handleRemove}
        />
      )}
    </div>
  );
}
