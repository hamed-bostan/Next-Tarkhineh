"use client";

import { ArrowRight, Trash2 } from "lucide-react";
import { clear } from "@/redux/actions/cartAction";
import { useDispatch } from "react-redux";

export default function CartHeaderMobile() {
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clear());
  };

  return (
    <div className="flex justify-between mb-6 md:hidden">
      <ArrowRight color="#353535" size={16} />
      <h1 className="text-sm font-bold text-[#353535]">سبد خرید</h1>
      <Trash2
        color="#353535"
        size={16}
        onClick={handleClearCart}
        className="cursor-pointer"
      />
    </div>
  );
}
