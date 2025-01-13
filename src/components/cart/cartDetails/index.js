import MyButton from "@/components/common/MyButton";
import { Separator } from "@/components/ui/separator";
import { OctagonAlert, Plus, Trash2 } from "lucide-react";

export default function CartDetails({ data }) {
  return (
    <div className="border border-[#CBCBCB] rounded-lg p-5">
      <CartItems data={data} />
      <Separator />
      <CartSummary />
    </div>
  );
}

function CartItems({ data }) {
  return (
    <div className="h-52 overflow-y-scroll mb-3">
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

function CartSummary() {
  return (
    <div className="text-sm text-[#353535]">
      <div className="flex justify-between py-3">
        <span>تخفیف محصولات</span>
        <span className="text-[#717171]">63000 تومان</span>
      </div>
      <Separator />
      <div className="flex justify-between mt-3 mb-2">
        <span>هزینه ارسال</span>
        <span className="text-[#717171]">0 تومان</span>
      </div>
      <div className="flex gap-x-2 mb-3">
        <div>
          <OctagonAlert size={16} color="#A9791C" />
        </div>
        <p className="text-xs text-[#A9791C]">
          هزینه ارسال در ادامه بر اساس آدرس، زمان و نحوه ارسال انتخابی شما
          محاسبه و به این مبلغ اضافه خواهد شد.
        </p>
      </div>
      <Separator />
      <div className="flex justify-between py-3">
        <span>مبلغ قابل پرداخت</span>
        <span className="text-[#417F56]">542000 تومان</span>
      </div>
      <MyButton label="ورود / ثبت‌ نام" buttonStyle="bg-[#417F56] w-full" />
    </div>
  );
}
