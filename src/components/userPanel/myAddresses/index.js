"use client";

import EmptyStateMessage from "@/components/common/EmptyStateMessage";
import { useSelector } from "react-redux";
import { useState } from "react";
import AddressDialog from "./AddressDialog";
import { GeolocationDialog } from "./geolocationDialog";

export default function MyAddresses() {
  const address = useSelector((state) => state.address.address); // Get address from Redux
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalAddressOpen, setIsModalAddressOpen] = useState(false);

  return (
    <>
      {!address && (
        <EmptyStateMessage
          text="شما در حال حاضر هیچ آدرسی ثبت نکرده‌اید!"
          button={true}
          buttonText="افزودن آدرس"
          onClick={() => setIsModalOpen(true)} // Open modal on click
        />
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
