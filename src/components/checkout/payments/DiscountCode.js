import MyButton from "@/components/common/MyButton";
import MyInput from "@/components/common/MyInput";
import { Separator } from "@/components/ui/separator";
import { BadgePercent } from "lucide-react";

export default function DiscountCode() {
  return (
    <div className="p-4 border border-[#CBCBCB] rounded-lg">
      <div className="mb-2 flex gap-x-1 items-center">
        <BadgePercent color="#353535" className="w-4 h-4" />
        <span className="text-sm text-[#353535]">ثبت کد تخفیف</span>
      </div>
      <Separator />
      <div className="flex gap-x-4 mt-4">
        <MyInput
          placeholder="کد تخفیف"
          style="placeholder:text-[#717171] text-[#717171]"
        />
        <MyButton label="ثبت کد" buttonStyle="bg-[#CBCBCB] text-[#EDEDED]" />
      </div>
    </div>
  );
}
