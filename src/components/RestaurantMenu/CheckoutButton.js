import { Button } from "../ui/button";

export default function CheckoutButton() {
  return (
    <Button
      variant="outline"
      className="text-[#417F56] border border-[#417F56] px-2 py-1"
    >
      <img
        src="assets/images/icons/shopping-cart.svg"
        alt="shopping cart icon"
      />
      <span>تکمیل خرید</span>
    </Button>
  );
}
