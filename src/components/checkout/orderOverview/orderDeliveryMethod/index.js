import { Separator } from "@/components/ui/separator";
import { ShoppingBag, Truck } from "lucide-react";

export default function OrderDeliveryMethod() {
  return (
    <div className="border border-[#CBCBCB] rounded-lg text-xs text-[#717171]">
      <Truck color="#353535" className="w-4 h-4" />
      <span className="text-[#353535] text-sm">روش تحویل سفارش</span>
      <Separator />
      <span>ارسال توسط پیک</span>
      <Truck color="#717171" className="w-4 h-4" />
      <span>تحویل حضوری</span>
      <ShoppingBag color="#717171" className="w-4 h-4" />
    </div>
  );
}
