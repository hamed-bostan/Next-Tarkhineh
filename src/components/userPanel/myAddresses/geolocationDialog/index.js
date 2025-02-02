import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import AddressRetrieval from "./AddressRetrieval";

export function GeolocationDialog({ isOpen, onClose, setIsInformedAddress }) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] p-0">
        <VisuallyHidden>
          <DialogHeader>
            <DialogTitle>افزودن آدرس جدید</DialogTitle>
            <DialogDescription>اضافه کردن آدرس</DialogDescription>
          </DialogHeader>
        </VisuallyHidden>
        <AddressRetrieval
          setIsInformedAddress={setIsInformedAddress}
          onClose={onClose}
        />
      </DialogContent>
    </Dialog>
  );
}
