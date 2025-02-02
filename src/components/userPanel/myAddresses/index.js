import EmptyStateMessage from "@/components/common/EmptyStateMessage";
import FetchAddress from "./FetchAddress";

export default function MyAddresses() {
  return (
    <>
      <EmptyStateMessage
        text="شما در حال حاضر هیچ آدرسی ثبت نکرده‌اید!"
        button={true}
        buttonText="افزودن آدرس"
      />
      <FetchAddress />
    </>
  );
}
