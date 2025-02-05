import { Textarea } from "@/components/ui/textarea";

export default function MoreInformation() {
  return (
    <Textarea
      placeholder="توضیحات سفارش (اختیاری)"
      className="resize-none p-4 text-[#353535] placeholder:text-[#717171] border border-[#CBCBCB] placeholder:text-xs my-3 md:mb-0"
    />
  );
}
