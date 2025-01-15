import { Plus, Trash2 } from "lucide-react";

export default function ItemsMobile({ data }) {
  return (
    <div className="h-52 overflow-y-scroll mb-3 md:hidden">
      {data.map((item, index) => (
        <div
          key={index}
          className={`grid grid-cols-2 p-2 ${
            index % 2 === 0 ? "bg-[#F9F9F9]" : "bg-[#EDEDED]"
          }`}
        >
          <div>
            <h3 className="text-[#353535] text-sm">{item.name}</h3>
            <span className="text-[#717171] text-xs">{item.price}</span>
          </div>
          <div className="bg-[#E5F2E9] rounded-sm h-8 px-1 flex items-center gap-x-1 w-14 self-center mr-auto">
            <Plus color="#417F56" size={16} />
            <span className="text-[#417F56] text-sm">1</span>
            <Trash2 color="#417F56" size={16} />
          </div>
        </div>
      ))}
    </div>
  );
}
