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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddressDialogOpen, setIsAddressDialogOpen] = useState(false);

  return (
    <AddressProvider>
      {addresses.length === 0 ? (
        <EmptyStateMessage
          text="شما در حال حاضر هیچ آدرسی ثبت نکرده‌اید!"
          button={true}
          buttonText="افزودن آدرس"
          onClick={() => setIsModalOpen(true)} // Open modal on click
        />
      ) : (
        <UserAddresses onClick={() => setIsModalOpen(true)} />
      )}

      <GeolocationDialog
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        openAddressDialog={() => setIsAddressDialogOpen(true)}
      />
      <AddressDialog
        isOpen={isAddressDialogOpen}
        onClose={() => setIsAddressDialogOpen(false)}
      />
    </AddressProvider>
  );
}
