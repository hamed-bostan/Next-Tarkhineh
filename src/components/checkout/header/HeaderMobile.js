"use client";

import { ArrowLeft, ArrowRight, Trash2 } from "lucide-react";
import { clear } from "@/redux/actions/cartAction";
import { useDispatch, useSelector } from "react-redux";

export default function HeaderMobile({ setActiveTab, activeTab }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.selectedItems);

  const isCartEmpty = cartItems.length === 0;

  const tabTitles = ["سبد خرید", "تکمیل اطلاعات", "پرداخت"];

  function handleClearCart() {
    dispatch(clear());
  }

  function handleNext() {
    if (activeTab < 2) {
      setActiveTab(activeTab + 1);
    }
  }

  function handlePrevious() {
    if (activeTab > 0) {
      setActiveTab(activeTab - 1);
    }
  }

  return (
    <div className="flex justify-between mb-6 md:hidden">
      <ArrowRight
        size={16}
        onClick={handleNext}
        className={`${
          activeTab === 2
            ? "text-[#A0A0A0] pointer-events-none"
            : "text-[#353535] cursor-pointer"
        }`}
      />
      <h1 className="text-sm font-bold text-[#353535]">
        {tabTitles[activeTab]}
      </h1>
      {activeTab > 0 ? (
        <ArrowLeft
          color="#353535"
          size={16}
          onClick={handlePrevious}
          className="cursor-pointer"
        />
      ) : (
        <Trash2
          color={isCartEmpty ? "#A0A0A0" : "#353535"}
          size={16}
          onClick={handleClearCart}
          className={`cursor-pointer ${
            isCartEmpty ? "pointer-events-none" : ""
          }`}
        />
      )}
    </div>
  );
}
