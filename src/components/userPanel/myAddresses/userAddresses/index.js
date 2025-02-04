import MyButton from "@/components/common/MyButton";

import HeaderDesktop from "../../header/HeaderDesktop";
import { useAddressDialog } from "@/context/AddressDialogContext";
import UserAddressList from "./UserAddressList";

export default function UserAddresses() {
  const { openGeolocationDialog } = useAddressDialog(); // Access the context values

  return (
    <div className="md:border md:border-[#CBCBCB] md:rounded-lg md:p-5">
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
        buttonStyle="text-[#417F56] border-[#417F56] hover:text-[#fff] mt-6 mx-auto md:hidden"
      />
    </div>
  );
}
