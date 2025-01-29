import MyButton from "@/components/common/MyButton";
import MyInput from "@/components/common/MyInput";
import { Pencil } from "lucide-react";
import HeaderDesktop from "../header/HeaderDesktop";

export default function Profile() {
  return (
    <div className="md:border md:border-[#CBCBCB] md:rounded-lg md:p-5 md:min-h-[30rem]">
      <HeaderDesktop label="پروفایل من" />
      <UserInformationForm />
    </div>
  );
}

function UserInformationForm() {
  return (
    <>
      <div className="grid grid-cols-1 gap-y-3 mb-5 md:grid-cols-2 md:gap-x-4 md:mb-7 md:gap-y-5">
        <MyInput
          placeholder="نام"
          style="md:placeholder:text-sm md:text-sm placeholder:text-[#CBCBCB] text-[#353535]"
        />
        <MyInput
          placeholder="نام خانوادگی"
          style="md:placeholder:text-sm md:text-sm placeholder:text-[#CBCBCB] text-[#353535]"
        />
        <MyInput
          placeholder="آدرس ایمیل"
          style="md:placeholder:text-sm md:text-sm placeholder:text-[#CBCBCB] text-[#353535]"
        />
        <MyInput
          placeholder="09121234567"
          style="md:placeholder:text-sm md:text-sm placeholder:text-[#CBCBCB] text-[#353535]"
        />
        <MyInput
          placeholder="تاریخ تولد (اختیاری)"
          style="md:placeholder:text-sm md:text-sm placeholder:text-[#CBCBCB] text-[#353535]"
        />
        <MyInput
          placeholder="نام نمایشی"
          style="md:placeholder:text-sm md:text-sm placeholder:text-[#CBCBCB] text-[#353535]"
        />
      </div>
      <MyButton
        label="ویرایش اطلاعات شخصی"
        icon={<Pencil />}
        variant="outline"
        buttonStyle="border-[#417F56] text-[#417F56] hover:text-[#fff] mx-auto"
      />
    </>
  );
}
