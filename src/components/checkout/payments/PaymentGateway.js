import { Separator } from "@/components/ui/separator";
import { Wallet } from "lucide-react";
import Image from "next/image";

export default function PaymentGateway() {
  return (
    <div className="p-4 border border-[#CBCBCB] rounded-lg md:grid md:grid-cols-[30fr_60fr]">
      <div className="flex items-center gap-x-1 text-[#353535] mb-2 md:mb-0 md:items-start">
        <Wallet className="w-4 h-4 md:w-5 md:h-5" />
        <span className="text-sm">درگاه پرداخت</span>
      </div>
      <Separator className="md:hidden" />
      <div className="flex gap-x-2 pt-4 mb-2 justify-center md:justify-start md:pt-0">
        <Image
          src="/assets/images/bank/bank-saman.jpg"
          width={50}
          height={50}
          alt="bank image"
          className="w-20 h-20 md:w-28 md:h-28"
        />
        <Image
          src="/assets/images/bank/bank-melat.jpg"
          width={50}
          height={50}
          alt="bank image"
          className="w-20 h-20 md:w-28 md:h-28"
        />
        <Image
          src="/assets/images/bank/bank-parsian.jpg"
          width={50}
          height={50}
          alt="bank image"
          className="w-20 h-20 md:w-28 md:h-28"
        />
      </div>
      <div className="text-xs text-[#717171] text-center md:col-start-2 md:text-start md:w-fit">
        <p>پرداخت از طریق کلیه کارت‌های عضو شتاب امکان‌پذیر است.‌</p>
        <p className="md:px-4">
          (لطفا قبل از پرداخت فیلترشکن خود را خاموش کنید.)
        </p>
      </div>
    </div>
  );
}
