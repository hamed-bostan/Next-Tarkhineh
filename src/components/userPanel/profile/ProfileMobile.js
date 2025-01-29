import MyButton from "@/components/common/MyButton";
import MyInput from "@/components/common/MyInput";
import { Pencil } from "lucide-react";

export default function ProfileMobile() {
  return (
    <div className="md:hidden">
      <div className="flex flex-col gap-y-3 mb-5">
        <MyInput placeholder="نام" />
        <MyInput placeholder="نام خانوادگی" />
        <MyInput placeholder="آدرس ایمیل" />
        <MyInput placeholder="09121234567" />
        <MyInput placeholder="تاریخ تولد (اختیاری)" />
        <MyInput placeholder="نام نمایشی" />
      </div>
      <MyButton
        label="ویرایش اطلاعات شخصی"
        icon={<Pencil />}
        variant="outline"
        buttonStyle="border-[#417F56] text-[#417F56] hover:text-[#fff] mx-auto"
      />
    </div>
  );
}
