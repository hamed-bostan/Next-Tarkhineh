import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { CreditCard, Wallet, WalletCards } from "lucide-react";

export default function PaymentMethod({ selectedTab, setSelectedTab }) {
  function handleTabChange(tab) {
    setSelectedTab(tab); // Set the active tab on checkbox change
  }

  return (
    <div className="border border-[#CBCBCB] rounded-lg text-xs text-[#717171] p-4 md:text-sm md:grid md:grid-cols-3 mb-3 md:mb-5">
      <div className="flex gap-x-1 items-center mb-4 md:mb-0">
        <CreditCard color="#353535" className="w-4 h-4 md:w-5 md:h-5" />
        <span className="text-[#353535] text-sm md:text-base">روش پرداخت</span>
      </div>
      <Separator className="md:hidden" />
      <div className="flex items-center py-4 md:p-0 md:grid md:grid-cols-[auto_1fr_afr_auto]">
        <Checkbox
          id="term1"
          className="md:row-span-2"
          checked={selectedTab === "OnlinePayment"}
          onCheckedChange={() => handleTabChange("OnlinePayment")}
        />
        <label
          htmlFor="term1"
          className="md:col-span-2 ml-1 mr-2 md:mx-0 w-fit md:mb-1"
        >
          پرداخت اینترنتی
        </label>
        <span className="hidden md:block md:row-start-2 md:col-start-2 md:col-span-2 text-xs">
          آنلاین پرداخت میکنم.
        </span>
        <WalletCards
          color="#717171"
          className="w-4 h-4 md:col-start-4 md:row-span-2 md:w-5 md:h-5"
        />
      </div>
      <div className="flex items-center md:grid md:grid-cols-[auto_1fr_afr_auto]">
        <Checkbox
          id="term2"
          className="md:row-span-2"
          checked={selectedTab === "PayOnDelivery"}
          onCheckedChange={() => handleTabChange("PayOnDelivery")}
        />
        <label
          htmlFor="term2"
          className="md:col-span-2 ml-1 mr-2 md:mx-0 w-fit md:mb-1"
        >
          پرداخت در محل
        </label>
        <span className="hidden md:block md:row-start-2 md:col-start-2 md:col-span-2 text-xs">
          در محل پرداخت میکنم.
        </span>
        <Wallet
          color="#717171"
          className="w-4 h-4 md:col-start-4 md:row-span-2 md:w-5 md:h-5"
        />
      </div>
    </div>
  );
}
