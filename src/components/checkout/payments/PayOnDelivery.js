import { Separator } from "@/components/ui/separator";
import { OctagonAlert } from "lucide-react";

export default function PayOnDelivery() {
  return (
    <div className="p-4 border border-[#CBCBCB] rounded-lg md:grid md:grid-cols-[30fr_70fr] bg-[#F9F9F9] mb-3 md:mb-5">
      <div className="text-[#353535] mb-2 flex items-center gap-x-1 md:mb-0 md:self-start">
        <OctagonAlert className="w-4 h-4 md:w-5 md:h-5" />
        <span className="text-sm">قابل توجه</span>
      </div>
      <Separator className="md:hidden" />
      <p className="text-xs text-[#717171] pt-4 md:pt-0">
        هزینه سفارش شما در حین تحویل کالا دریافت خواهد شد. لطفا قبل از تحویل
        کالا کارت بانکی یا پول نقد همراه خود داشته باشید و از درخواست برای
        پرداخت در زمان بعدی یا نسیه خودداری فرمایید. با تشکر از همراهی شما.
      </p>
    </div>
  );
}
