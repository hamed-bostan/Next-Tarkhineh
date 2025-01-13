import { Separator } from "@/components/ui/separator";
import CartItemsMobile from "./CartItemsMobile";
import CartSummary from "./CartSummary";

export default function CartDetails({ data }) {
  return (
    <div className="border border-[#CBCBCB] rounded-lg p-5 md:border-none md:p-0">
      <CartItemsMobile data={data} />
      <Separator className="md:hidden" />
      <CartSummary />
    </div>
  );
}
