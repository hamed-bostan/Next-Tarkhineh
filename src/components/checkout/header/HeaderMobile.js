"use client";

import { ArrowLeft, ArrowRight, Trash2 } from "lucide-react";
import { clear } from "@/redux/actions/cartAction";
import { useDispatch, useSelector } from "react-redux";
import { tabsConfig } from "./TabsConfig";
import { useCheckoutTab } from "@/context/CheckoutTabContext";

export default function HeaderMobile() {
  const { activeTab, setActiveTab } = useCheckoutTab();

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.selectedItems);

  const isCartEmpty = cartItems.length === 0;

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
          activeTab === tabsConfig.length - 1
            ? "text-[#A0A0A0] pointer-events-none"
            : "text-[#353535] cursor-pointer"
        }`}
      />
      <h1 className="text-sm font-bold text-[#353535]">
        {tabsConfig[activeTab].label}
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
