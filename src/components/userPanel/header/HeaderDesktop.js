import MyButton from "@/components/common/MyButton";
import { Separator } from "@/components/ui/separator";
import { CirclePlus } from "lucide-react";

export default function HeaderDesktop({
  label,
  style,
  button,
  openGeolocationDialog,
}) {
  return (
    <div className={`hidden md:block ${style}`}>
      <div className="flex justify-between items-center mb-2">
        <span className="block text-[#353535]">{label}</span>
        {button && (
          <MyButton
            icon={<CirclePlus size={16} />}
            onClick={openGeolocationDialog}
            label="افزودن آدرس جدید"
            variant="outline"
            buttonStyle="hidden md:flex text-[#417F56] border-none shadow-none p-0 hover:bg-transparent hover:text-[#326343] md:text-xs"
          />
        )}
      </div>
      <Separator className="bg-[#CBCBCB]" />
    </div>
  );
}
