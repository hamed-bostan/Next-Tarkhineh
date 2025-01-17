import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { ShoppingBag, Truck } from "lucide-react";

export default function OrderDeliveryMethod() {
  return (
    <div className="border border-[#CBCBCB] rounded-lg text-xs text-[#717171] px-4 mb-3">
      <div className="flex gap-x-1 items-center py-4">
        <Truck color="#353535" className="w-4 h-4" />
        <span className="text-[#353535] text-sm">روش تحویل سفارش</span>
      </div>
      <Separator />
      <div className="py-4 space-y-2">
        <div className="flex gap-x-1 items-center">
          <Checkbox id="term1" className="ml-2" />
          <label htmlFor="term1" className="cursor-pointer">
            ارسال توسط پیک
          </label>
          <Truck color="#717171" className="w-4 h-4" />
        </div>
        <div className="flex gap-x-1 items-center">
          <Checkbox id="term2" className="ml-2" />
          <label htmlFor="term2" className="cursor-pointer">
            تحویل حضوری
          </label>
          <ShoppingBag color="#717171" className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}
