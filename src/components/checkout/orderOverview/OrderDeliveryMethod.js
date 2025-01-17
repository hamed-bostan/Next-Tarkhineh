import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { ShoppingBag, Truck } from "lucide-react";

export default function OrderDeliveryMethod() {
  return (
    <div className="border border-[#CBCBCB] rounded-lg text-xs text-[#717171] p-4 md:text-sm md:grid md:grid-cols-3 mb-3">
      <div className="flex gap-x-1 items-center mb-4 md:mb-0">
        <Truck color="#353535" className="w-4 h-4 md:w-5 md:h-5" />
        <span className="text-[#353535] text-sm md:text-base">
          روش تحویل سفارش
        </span>
      </div>
      <Separator className="md:hidden" />
      <div className="flex gap-x-1 items-center pt-4 pb-2 md:p-0 md:grid md:grid-cols-[auto_1fr_afr_auto]">
        <Checkbox id="term1" className="ml-2 md:ml-0 md:row-span-2" />
        <label htmlFor="term1" className="cursor-pointer md:col-span-2 mb-1">
          ارسال توسط پیک
        </label>
        <span className="hidden md:block md:row-start-2 md:col-start-2 md:col-span-2 text-xs">
          توسط پیک رستوران ارسال شود.
        </span>
        <Truck
          color="#717171"
          className="w-4 h-4 md:col-start-4 md:row-span-2 md:w-5 md:h-5"
        />
      </div>
      <div className="flex gap-x-1 items-center pt-4 pb-2 md:p-0 md:grid md:grid-cols-[auto_1fr_afr_auto]">
        <Checkbox id="term2" className="ml-2 md:ml-0 md:row-span-2" />
        <label htmlFor="term2" className="cursor-pointer md:col-span-2 mb-1">
          تحویل حضوری
        </label>
        <span className="hidden md:block md:row-start-2 md:col-start-2 md:col-span-2 text-xs">
          حضوری تحویل میگیرم.
        </span>
        <ShoppingBag
          color="#717171"
          className="w-4 h-4 md:col-start-4 md:row-span-2 md:w-5 md:h-5"
        />
      </div>
    </div>
  );
}
