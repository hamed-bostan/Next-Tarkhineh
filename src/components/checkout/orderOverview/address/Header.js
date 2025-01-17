import { CirclePlus, MapPin } from "lucide-react";

export default function Header() {
  return (
    <div className="flex justify-between items-center mb-2">
      <div className="flex gap-x-1 text-sm text-[#353535]">
        <MapPin color="#353535" className="w-4 h-4" />
        <span>آدرس ها</span>
      </div>
      <div className="flex gap-x-1 cursor-pointer">
        <CirclePlus color="#417F56" className="w-4 h-4" />
        <span className="text-xs text-[#417F56]">افزودن آدرس</span>
      </div>
    </div>
  );
}
