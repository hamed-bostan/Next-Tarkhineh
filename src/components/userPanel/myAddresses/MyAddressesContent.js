"use client";

import EmptyStateMessage from "@/components/common/EmptyStateMessage";
import { useSelector } from "react-redux";
import { GeolocationDialog } from "./geolocationDialog";
import AddressDialog from "./addressDialog";
import { AddressProvider } from "@/context/AddressContext";
import UserAddresses from "./userAddresses";

export default function MyAddressesContent() {
  const addresses = useSelector((state) => state.address.addresses); // Get address from Redux

  return (
    <AddressProvider>
      {addresses.length === 0 ? (
        <EmptyStateMessage
          text="شما در حال حاضر هیچ آدرسی ثبت نکرده‌اید!"
          button={true}
          buttonText="افزودن آدرس"
        />
      ) : (
        <UserAddresses />
      )}

      <GeolocationDialog />
      <AddressDialog />
    </AddressProvider>
  );
}
