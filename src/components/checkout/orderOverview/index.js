import MyAddresses from "@/components/userPanel/myAddresses";
import Address from "./address";
import MoreInformation from "./address/MoreInformation";
import CartSummaryOverview from "./CartSummaryOverview";
import OrderDeliveryMethod from "./OrderDeliveryMethod";

export default function OrderOverview() {
  return (
    <section className="md:grid md:grid-cols-[60fr_40fr] md:gap-x-4 lg:gap-x-6">
      <div>
        <OrderDeliveryMethod />
        <MyAddresses />
        <MoreInformation />
      </div>
      <CartSummaryOverview />
    </section>
  );
}
