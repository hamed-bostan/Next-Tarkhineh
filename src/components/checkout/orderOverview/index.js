import Address from "./address";
import MoreInformation from "./address/MoreInformation";
import CartSummaryOverview from "./CartSummaryOverview";
import OrderDeliveryMethod from "./OrderDeliveryMethod";

export default function OrderOverview() {
  return (
    <>
      <OrderDeliveryMethod />
      <Address />
      <MoreInformation />
      <CartSummaryOverview />
    </>
  );
}
