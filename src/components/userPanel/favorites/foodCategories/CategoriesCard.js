import { ArrowLeft } from "lucide-react";

export default function CategoriesCard({ item }) {
  return (
    <div className="flex items-center gap-x-1 bg-[#EDEDED] px-2 rounded-xl h-8 cursor-pointer">
      <span className="text-xs lg:text-sm">{item.type}</span>
      <ArrowLeft className="md:w-4 md:h-4 flex self-center" />
    </div>
  );
}
