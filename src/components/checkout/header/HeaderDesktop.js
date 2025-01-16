import { ShoppingCart, SquareCheckBig, Wallet } from "lucide-react";

export default function HeaderDesktop() {
  return (
    <div className="hidden md:flex justify-between mb-7">
      <div className="flex gap-x-1">
        <ShoppingCart size={20} color="#417F56" />
        <span className="text-[#417F56] text-sm font-bold">سبد خرید</span>
      </div>
      <div className="flex gap-x-1">
        <SquareCheckBig size={20} color="#CBCBCB" />
        <span className="text-[#CBCBCB] text-sm">تکمیل اطلاعات</span>
      </div>
      <div className="flex gap-x-1">
        <Wallet size={20} color="#CBCBCB" />
        <span className="text-[#CBCBCB] text-sm">پرداخت</span>
      </div>
    </div>
  );
}
