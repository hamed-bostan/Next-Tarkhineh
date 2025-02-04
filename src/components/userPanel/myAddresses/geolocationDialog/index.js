import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import AddressRetrieval from "./AddressRetrieval";
import { useAddressDialog } from "@/context/AddressDialogContext";

export function GeolocationDialog() {
  const { isGeolocationDialogOpen, closeGeolocationDialog } =
    useAddressDialog(); // Access the context values

  return (
    <Dialog
      open={isGeolocationDialogOpen}
      onOpenChange={closeGeolocationDialog}
    >
      <DialogContent className="sm:max-w-[425px] p-0">
        <VisuallyHidden>
          <DialogHeader>
            <DialogTitle>افزودن آدرس جدید</DialogTitle>
            <DialogDescription>اضافه کردن آدرس</DialogDescription>
          </DialogHeader>
        </VisuallyHidden>
        <AddressRetrieval />
      </DialogContent>
    </Dialog>
  );
}
