import Link from "next/link";
import MyButton from "../common/MyButton";

export default function CheckoutButton() {
  return (
    <div className="w-fit mr-auto">
      <Link href="/checkout">
        <MyButton
          variant="outline"
          label="تکمیل خرید"
          imageSrc="/assets/images/icons/shopping-cart.svg"
          buttonStyle="text-[#417F56] border border-[#417F56] hover:text-[#fff] w-24 h-8 md:w-32 lg:w-44 md:h-10"
          alt="shopping cart icon"
          iconStyle="w-4 h-4 md:h-5 md:w-5"
        />
      </Link>
    </div>
  );
}
