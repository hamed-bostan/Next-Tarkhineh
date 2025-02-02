"use client";

import EmptyStateMessage from "@/components/common/EmptyStateMessage";
import { useSelector } from "react-redux";
import { ModalComponent } from "./ModalComponent";
import { useState } from "react";
import InformAddress from "./InformAddress";

export default function MyAddresses() {
  const address = useSelector((state) => state.address.address); // Get address from Redux
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isInformedAddress, setIsInformedAddress] = useState(false);

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

      <ModalComponent
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        setIsInformedAddress={setIsInformedAddress}
      />
      {isInformedAddress && <InformAddress />}
    </>
  );
}
