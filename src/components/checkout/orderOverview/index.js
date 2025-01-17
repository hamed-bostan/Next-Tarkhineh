import CartSummary from "../CartSummary";
import Address from "./address";
import MoreInformation from "./address/MoreInformation";
import OrderDeliveryMethod from "./OrderDeliveryMethod";

export default function OrderOverview() {
  return (
    <>
      <OrderDeliveryMethod />
      <Address />
      <MoreInformation />
      <CartSummary />
    </>
  );
}
