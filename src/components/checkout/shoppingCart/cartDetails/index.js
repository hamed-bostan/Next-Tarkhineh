"use client";

import { useSelector } from "react-redux";
import { Separator } from "@/components/ui/separator";
import Items from "./items";
import CartSummary from "../../CartSummary";
import EmptyStateMessage from "@/components/common/EmptyStateMessage";
import { useCheckoutTab } from "@/context/CheckoutTabContext";

export default function CartDetails() {
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
          <Items selectedItems={selectedItems} />
          <Separator className="md:hidden" />
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
