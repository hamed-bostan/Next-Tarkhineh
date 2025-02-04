"use client";

import EmptyStateMessage from "@/components/common/EmptyStateMessage";
import { useSelector } from "react-redux";
import { useState } from "react";
import { GeolocationDialog } from "./geolocationDialog";
import UserAddresses from "./UserAddresses";
import AddressDialog from "./addressDialog";
import { AddressProvider } from "@/context/AddressContext";

export default function MyAddresses() {
  const addresses = useSelector((state) => state.address.addresses); // Get address from Redux
  const [isGeolocationDialogOpen, setIsGeolocationDialogOpen] = useState(false);
  const [isAddressDialogOpen, setIsAddressDialogOpen] = useState(false);

  return (
    <AddressProvider>
      {addresses.length === 0 ? (
        <EmptyStateMessage
          text="شما در حال حاضر هیچ آدرسی ثبت نکرده‌اید!"
          button={true}
          buttonText="افزودن آدرس"
          openGeolocationDialog={() => setIsGeolocationDialogOpen(true)}
        />
      ) : (
        <UserAddresses openGeolocationDialog={() => setIsGeolocationDialogOpen(true)} />
      )}

      <GeolocationDialog
        isOpen={isGeolocationDialogOpen}
        onClose={() => setIsGeolocationDialogOpen(false)}
        openAddressDialog={() => setIsAddressDialogOpen(true)}
      />
      <AddressDialog
        isOpen={isAddressDialogOpen}
        onClose={() => setIsAddressDialogOpen(false)}
      />
    </AddressProvider>
  );
}
