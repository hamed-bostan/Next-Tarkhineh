import { Textarea } from "@/components/ui/textarea";

export default function MoreInformation() {
  return (
    <Textarea
      placeholder="توضیحات سفارش (اختیاری)"
      className="resize-none text-[#717171] placeholder:text-[#717171] border border-[#CBCBCB] placeholder:text-xs mb-3"
    />
  );
}
