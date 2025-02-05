import MyButton from "@/components/common/MyButton";

import HeaderDesktop from "../../header/HeaderDesktop";
import { useAddressDialog } from "@/context/AddressDialogContext";
import UserAddressList from "./UserAddressList";
import { usePathname } from "next/navigation";

export default function UserAddresses() {
  const { openGeolocationDialog } = useAddressDialog(); // Access the context values
  const pathname = usePathname();

  return (
    <div
      className={`md:border md:border-[#CBCBCB] md:rounded-lg md:p-5 ${
        pathname === "/checkout"
          ? "border border-[#CBCBCB] p-4 pb-6 rounded-lg"
          : ""
      }`}
    >
      <HeaderDesktop
        label="آدرس ها"
        style="mb-4"
        button={true}
        openGeolocationDialog={openGeolocationDialog}
      />
      <UserAddressList />
      <MyButton
        onClick={openGeolocationDialog}
        label="افزودن آدرس جدید"
        variant="outline"
        buttonStyle={`${
          pathname === "/checkout" && "hidden"
        } text-[#417F56] border-[#417F56] hover:text-[#fff] mt-6 mx-auto md:hidden`}
      />
    </div>
  );
}
