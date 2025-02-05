import MyAddresses from "@/components/userPanel/myAddresses";
import OrderDeliveryMethod from "./OrderDeliveryMethod";
import CartSummary from "../CartSummary";
import MoreInformation from "./MoreInformation";

export default function OrderOverview() {
  return (
    <section className="md:grid md:grid-cols-[60fr_40fr] md:gap-x-4 lg:gap-x-6">
      <div>
        <OrderDeliveryMethod />
        <MyAddresses />
        <MoreInformation />
      </div>
      <CartSummary />
    </section>
  );
}
