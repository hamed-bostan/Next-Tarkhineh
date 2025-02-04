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

export default function AddressDialog() {
  const { isAddressDialogOpen, closeAddressDialog } = useAddressDialog(); // Access the context values

  return (
    <Dialog open={isAddressDialogOpen} onOpenChange={closeAddressDialog}>
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
