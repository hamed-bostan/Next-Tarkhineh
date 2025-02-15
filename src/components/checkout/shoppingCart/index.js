"use client";

import { useSelector } from "react-redux";
import Items from "./items";
import EmptyStateMessage from "@/components/common/EmptyStateMessage";
import { useCheckoutTab } from "@/context/CheckoutTabContext";
import CartSummary from "../CartSummary";

export default function ShoppingCart() {
  const { activeTab } = useCheckoutTab();
  const hasBorder = activeTab === 0;
  const selectedItems = useSelector((state) => state.cart.selectedItems);

  return (
    <>
      {selectedItems.length > 0 ? (
        <div
          className={`md:grid md:grid-cols-[60fr_40fr] md:gap-x-4 lg:gap-x-6 ${
            hasBorder && "p-5 border border-[#CBCBCB] rounded-lg"
          }`}
        >
          <Items />
          <CartSummary />
        </div>
      ) : (
        <EmptyStateMessage
          button={true}
          text="شما در حال حاضر هیچ سفارشی ثبت نکرده‌اید!"
          buttonText="منوی رستوران"
          href="/menu"
        />
      )}
    </>
  );
}
