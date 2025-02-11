import MyInput from "@/components/common/MyInput";
import { Textarea } from "@/components/ui/textarea";

export default function AddressProperty() {
  return (
    <div className="mb-12">
      <span className="mb-6 block">آدرس ملک متقاضی</span>
      <div className="grid grid-cols-2 gap-4">
        <MyInput placeholder="استان" />
        <MyInput placeholder="شهر" />
        <MyInput placeholder="منطقه" style="h-full" />
        <Textarea placeholder="آدرس دقیق" className="resize-none" />
      </div>
    </div>
  );
}
