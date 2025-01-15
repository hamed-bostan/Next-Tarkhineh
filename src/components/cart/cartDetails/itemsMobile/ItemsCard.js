import { Plus, Trash2 } from "lucide-react";

export default function ItemsCard({ item, index }) {
  return (
    <div
      className={`grid grid-cols-2 p-2 ${
        index % 2 === 0 ? "bg-[#F9F9F9]" : "bg-[#EDEDED]"
      }`}
    >
      <div>
        <h3 className="text-[#353535] text-sm">{item.title}</h3>
        <span className="text-[#717171] text-xs">{item.finalPrice}</span>
      </div>
      <div className="bg-[#E5F2E9] rounded-sm h-8 px-1 flex items-center gap-x-1 w-14 self-center mr-auto">
        <Plus color="#417F56" size={16} />
        <span className="text-[#417F56] text-sm">1</span>
        <Trash2 color="#417F56" size={16} />
      </div>
    </div>
  );
}
