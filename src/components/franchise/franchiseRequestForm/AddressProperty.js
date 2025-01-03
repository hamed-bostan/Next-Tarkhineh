import MyInput from "@/components/common/MyInput";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

export default function AddressProperty() {
  return (
    <div>
      <span className="mb-6 block">آدرس ملک متقاضی</span>
      <div className="grid grid-cols-3 gap-x-6 gap-y-4 grid-rows-3">
        <MyInput placeholder="استان" style="h-full" />
        <MyInput placeholder="شهر" style="h-full" />
        <Image
          src="/assets/images/franchise/map.jpg"
          width={150}
          height={100}
          alt="map image"
          className="row-span-3 w-full h-full rounded-sm border border-[#CBCBCB]"
        />
        <MyInput placeholder="منطقه" style="h-full" />
        <Textarea placeholder="آدرس دقیق" className="row-span-2 resize-none" />
      </div>
    </div>
  );
}
