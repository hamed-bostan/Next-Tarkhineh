import { ArrowRight, Trash2 } from "lucide-react";

export default function CartHeaderMobile() {
  return (
    <div className="flex justify-between mb-6 md:hidden">
      <ArrowRight color="#353535" size={16} />
      <h1 className="text-sm font-bold text-[#353535]">سبد خرید</h1>
      <Trash2 color="#353535" size={16} />
    </div>
  );
}
