import { AddressDialogProvider } from "@/context/AddressDialogContext";
import MyAddressesContent from "./MyAddressesContent";

export default function MyAddresses() {
  return (
    <AddressDialogProvider>
      <MyAddressesContent />
    </AddressDialogProvider>
  );
}
