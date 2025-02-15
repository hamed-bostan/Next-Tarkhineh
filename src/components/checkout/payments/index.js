import DiscountCode from "./DiscountCode";
import PaymentGateway from "./PaymentGateway";
import PaymentMethod from "./PaymentMethod";

export default function Payments() {
  return (
    <>
      <DiscountCode />
      <PaymentMethod />
      <PaymentGateway />
    </>
  );
}
