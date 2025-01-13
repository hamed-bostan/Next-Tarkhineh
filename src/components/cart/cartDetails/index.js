import { Separator } from "@/components/ui/separator";
import CartItemsMobile from "./CartItemsMobile";
import CartSummary from "./CartSummary";
import CartItemsListDesktop from "./CartItemsListDesktop";

export default function CartDetails({ data }) {
  return (
    <div className="border border-[#CBCBCB] rounded-lg p-5 md:border-none md:p-0">
      <CartItemsMobile data={data} />
      <div className="md:grid md:grid-cols-[60fr_40fr] md:gap-x-4 lg:gap-x-6">
        <CartItemsListDesktop />
        <Separator className="md:hidden" />
        <CartSummary />
      </div>
    </div>
  );
}
