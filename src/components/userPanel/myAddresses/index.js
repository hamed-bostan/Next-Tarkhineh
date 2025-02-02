import EmptyCartMessage from "@/components/checkout/EmptyCartMessage";
import FetchAddress from "./FetchAddress";

export default function MyAddresses() {
  return (
    <>
      <EmptyCartMessage
        text="شما در حال حاضر هیچ آدرسی ثبت نکرده‌اید!"
        button="افزودن آدرس"
      />
      <FetchAddress />
    </>
  );
}
