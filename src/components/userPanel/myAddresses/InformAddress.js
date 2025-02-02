import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

import MyButton from "@/components/common/MyButton";
import MyInput from "@/components/common/MyInput";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";

export default function InformAddress({ isOpen, onClose }) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] p-0">
        <VisuallyHidden>
          <DialogHeader>
            <DialogTitle>افزودن آدرس جدید</DialogTitle>
            <DialogDescription>برای اضافه کردن آدرس</DialogDescription>
          </DialogHeader>
        </VisuallyHidden>
        <Details />
      </DialogContent>
    </Dialog>
  );
}

function Details() {
  return (
    <>
      <MyInput
        placeholder="عنوان آدرس"
        style="placeholder:text-[#717171] text-[#353535] mb-3"
      />
      <div className="flex items-center gap-x-1 mb-2">
        <Checkbox id="term1" />
        <label htmlFor="term1" className="text-xs text-[#353535]">
          تحویل گیرنده خودم هستم.
        </label>
      </div>
      <MyInput
        placeholder="شماره همراه"
        style="placeholder:text-[#717171] text-[#353535] mb-3"
      />
      <Textarea
        placeholder="آدرس دقیق شما"
        className="resize-none text-[#353535] placeholder:text-[#717171] border border-[#CBCBCB] placeholder:text-xs text-xs"
      />
      <div className="flex justify-between mt-6 gap-x-4">
        <MyButton
          variant="outline"
          label="انصراف"
          buttonStyle="text-[#417F56] border-none hover:text-[#fff] w-full shadow-none hover:shadow-sm"
        />
        <MyButton
          label="ثبت آدرس"
          buttonStyle="bg-[#417F56] border border-[#417F56] w-full"
        />
      </div>
    </>
  );
}
