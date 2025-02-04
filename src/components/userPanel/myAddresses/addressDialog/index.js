import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

import AddressForm from "./AddressForm";
import { useAddressDialog } from "@/context/AddressDialogContext";
import { useContext } from "react";
import { AddressContext } from "@/context/AddressContext";

export default function AddressDialog() {
  const { isAddressDialogOpen, closeAddressDialog } = useAddressDialog(); // Access the context values
  const { setEditingAddress } = useContext(AddressContext);

  function onClose() {
    closeAddressDialog();
    setEditingAddress(null);
  }

  return (
    <Dialog open={isAddressDialogOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] px-4 py-16">
        <VisuallyHidden>
          <DialogHeader>
            <DialogTitle>افزودن آدرس جدید</DialogTitle>
            <DialogDescription>برای اضافه کردن آدرس</DialogDescription>
          </DialogHeader>
        </VisuallyHidden>
        <AddressForm />
      </DialogContent>
    </Dialog>
  );
}
