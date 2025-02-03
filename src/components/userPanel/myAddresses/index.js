"use client";

import EmptyStateMessage from "@/components/common/EmptyStateMessage";
import { useSelector } from "react-redux";
import { useState } from "react";
import { GeolocationDialog } from "./geolocationDialog";
import UserAddresses from "./UserAddresses";
import AddressDialog from "./addressDialog";

export default function MyAddresses() {
  const address = useSelector((state) => state.address.addresses); // Get address from Redux
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalAddressOpen, setIsModalAddressOpen] = useState(false);

  return (
    <>
      {address.length === 0 ? (
        <EmptyStateMessage
          text="شما در حال حاضر هیچ آدرسی ثبت نکرده‌اید!"
          button={true}
          buttonText="افزودن آدرس"
          onClick={() => setIsModalOpen(true)} // Open modal on click
        />
      ) : (
        <UserAddresses />
      )}

      <GeolocationDialog
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        setIsInformedAddress={setIsModalAddressOpen}
      />
      <AddressDialog
        isOpen={isModalAddressOpen}
        onClose={() => setIsModalAddressOpen(false)}
      />
    </>
  );
}
